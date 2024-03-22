import jwt from 'jsonwebtoken';

import {User} from '../models/user.models.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {
  ValidateRegister,
  ValidateLogin,
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

  user = await User.create({
    name,
    email,
    password,
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

export {registerUser, loginUser};
