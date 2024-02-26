const mongoose = require('mongoose');
const zod = require('zod');

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

const validate = user => {
  const schema = zod.object({
    username: zod.string().min(2),
    password: zod.string().min(5),
  });

  return schema.safeParse(user);
};

const validateCourse = course => {
  const schema = zod.object({
    title: zod.string().min(2),
    description: zod.string().min(5),
    image: zod.string().trim().url(),
    price: zod.number().nonnegative(),
  });

  return schema.safeParse(course);
};

module.exports = {
  Admin,
  User,
  Course,
  validate,
  validateCourse,
};
