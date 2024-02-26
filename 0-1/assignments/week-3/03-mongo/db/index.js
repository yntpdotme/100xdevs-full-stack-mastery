const mongoose = require('mongoose');
const {number} = require('zod');

// Connect to MongoDB
mongoose
  .connect('your-mongodb-url')
  .then(() => console.log(`Connected to MongoDB...`))
  .catch(err => console.log(`Could not connect to MongoDB...`, err));

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
    minlenght: 2,
    maxlenght: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 5,
  },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
    minlenght: 2,
    maxlenght: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 5,
  },
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: {
    type: String,
    required: true,
    minlenght: 2,
    maxlenght: 50,
  },
  description: {
    type: String,
    required: true,
    minlenght: 5,
  },
  imagelink: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
