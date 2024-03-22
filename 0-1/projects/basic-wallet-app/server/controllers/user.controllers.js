import jwt from 'jsonwebtoken';

import {User} from '../models/user.models.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {ValidateRegister} from '../validators/user.validators.js';

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

  const options = {
    httpOnly: true,
    sercure: process.env.NODE_ENV === 'production',
  };

  // get the user document ignoring the password and refreshToken field
  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken -__v'
  );

  if (!createdUser)
    throw new ApiError(500, 'Something went wrong while registering the user');

  return res
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {user: createdUser, accessToken, refreshToken},
        'User registered successfully'
      )
    );
};

const loginUser = async (req, res) => {
};

export {registerUser, loginUser};
