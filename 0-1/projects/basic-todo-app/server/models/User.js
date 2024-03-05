import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// Define Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY);
  return token;
};

// Create Model
const User = mongoose.model('User', userSchema);

export {User};
