import jwt from 'jsonwebtoken';

import {User} from '../models/user.models.js';
import {Wallet} from '../models/wallet.models.js';
import {ApiError, ApiResponse, getAvatarName, paginateQuery} from '../utils/index.js';
import {
  ValidateRegister,
  ValidateLogin,
  ValidateUpdate,
} from '../validators/user.validators.js';

const generateAccessAndRefreshTokens = async userId => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // attach refresh token to user document to avoid refreshing access token with multiple refresh tokens
    user.refreshToken = refreshToken;

    await user.save();

    return {accessToken, refreshToken};
  } catch (error) {
    throw new ApiError(
      500,
      'Something went wrong while generating the access token'
    );
  }
};

const registerUser = async (req, res) => {
  const {error} = ValidateRegister(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  const {name, email, password} = req.body;

  let user = await User.findOne({email});
  if (user) throw new ApiError(409, 'User with email already exists', []);

  const avatar = `https://ui-avatars.com/api/?name=${getAvatarName(
    name
  )}&size=250&background=4d2be2&color=ffffff`;

  user = await User.create({
    name,
    email,
    password,
    avatar,
  });

  await Wallet.create({
    userId: user._id,
    balance: Math.random() * 999 + 1,
  });

  const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(
    user._id
  );

  // get the user document ignoring the password and refreshToken field
  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken -__v'
  );

  if (!createdUser)
    throw new ApiError(500, 'Something went wrong while registering the user');

  const options = {
    httpOnly: true,
    sercure: process.env.NODE_ENV === 'production',
  };

  return res
    .status(201)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        201,
        {user: createdUser, accessToken, refreshToken},
        'User registered successfully'
      )
    );
};

const loginUser = async (req, res) => {
  const {error} = ValidateLogin(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  const {email, password} = req.body;

  const user = await User.findOne({email});
  if (!user) throw new ApiError(401, 'Email and password do not match');

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, 'Email and password do not match');
  }

  const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(
    user._id
  );

  // get the user document ignoring the password and refreshToken field
  const loggedInUser = await User.findById(user._id).select(
    '-password -refreshToken -__v'
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  return res
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {user: loggedInUser, accessToken, refreshToken},
        'User logged in successfully'
      )
    );
};

const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {new: true}
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new ApiResponse(200, {}, 'User logged out'));
};

const getAllUsers = async (req, res) => {
  const {filter = '', page = 1, limit = 10} = req.query;

  // This regex matches each word in a name starting with "filter".
  const regex = new RegExp(`\\b${filter}`, 'i');

  const usersQuery = User.find({name: {$regex: regex}});
  const result = await paginateQuery(usersQuery, page, limit);

  const userList = result.data.map(user => ({
    name: user.name,
    email: user.email,
    _id: user._id,
  }));

  return res.json(
    new ApiResponse(
      200,
      {users: userList, pagination: result.pagination},
      'Users fetched successfully'
    )
  );
};

const getCurrentUser = async (req, res) => {
  const currentUser = await User.findById(req.user._id).select(
    '-password -refreshToken -__v'
  );

  return res.json(
    new ApiResponse(200, {currentUser}, 'User fetched successfully')
  );
};

const updateCurrentUser = async (req, res) => {
  const {error} = ValidateUpdate(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  // Build the update object based on user input
  const {name, oldPassword, newPassword} = req.body;

  const user = await User.findById(req.user?._id);

  if (oldPassword && newPassword) {
    const isPasswordValid = await user.isPasswordCorrect(oldPassword);
    if (!isPasswordValid) {
      throw new ApiError(400, 'Invalid old password');
    }

    user.password = newPassword;
  }

  if (name) {
    user.name = name;
    user.avatar = `https://ui-avatars.com/api/?name=${getAvatarName(
      name
    )}&size=250&background=4d2be2&color=ffffff`;
  }

  await user.save();

  // get the updated user document ignoring the password and refreshToken field
  const updatedUser = await User.findById(user._id).select(
    '-password -refreshToken -__v'
  );

  return res
    .status(201)
    .json(
      new ApiResponse(201, {user: updatedUser}, 'User updated successfully')
    );
};

const refreshAccessToken = async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, 'Unauthorized request');
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, 'Invalid refresh token');
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      // If token is valid but is used already
      throw new ApiError(401, 'Refresh token is expired or used');
    }

    const {accessToken, refreshToken: newRefreshToken} =
      await generateAccessAndRefreshTokens(user._id);

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    };

    return res
      .status(200)
      .cookie('accessToken', accessToken, options)
      .cookie('refreshToken', newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          {accessToken, refreshToken: newRefreshToken},
          'Access token refreshed'
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || 'Invalid refresh token');
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getCurrentUser,
  updateCurrentUser,
  refreshAccessToken,
};
