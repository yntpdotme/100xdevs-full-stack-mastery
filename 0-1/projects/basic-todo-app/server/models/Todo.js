import mongoose from 'mongoose';

// Define Schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 1024,
    required: true,
    trim: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

// Create Model
const Todo = mongoose.model('Todo', todoSchema);

export {Todo};
