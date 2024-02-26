const {Router} = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = Router();
const userMiddleware = require('../middleware/user');
const secret = require('../config/default.json');
const {User, Course, validate} = require('../db/index');

// User Routes
router.post('/signup', async (req, res) => {
  // Validate the Input
  const input = validate(req.body);
  if (!input.success) return res.status(400).send(input.error.message);

  let user = await User.findOne({username: req.body.username});

  // Check if User already Exists
  if (user) return res.status(400).send(`User already registered.`);

  // Create New User
  user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user.password = await bcrypt.hash(user.password, 10);
  await user.save();

  // Return the New User
  const {_id, username} = user;
  res.status(200).send({_id, username});
});

router.post('/signin', async (req, res) => {
  // Validate the Input
  const input = validate(req.body);
  if (!input.success) return res.status(400).send(input.error.message);

  // Validate Username
  let user = await User.findOne({username: req.body.username});
  if (!user) return res.status(400).send(`Invalid Email or Password.`);

  // Validate Password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send(`Invalid Email or Password.`);

  const token = jwt.sign({username: user.username}, secret.jwtSecret);
  res.send(token);
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find().sort({title: 1});
  // Return the courses
  res.send(courses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  const courseId = new mongoose.Types.ObjectId(req.params.courseId);
  const course = await Course.findById(courseId);
  if (!course)
    return res.status(404).send(`The course with the given ID was not found`);

  const user = await User.findOne({username: req.username});

  // Add Course to the Course Array
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $push: {
        purchasedCourses: req.params.courseId,
      },
    },
    {new: true},
  );

  const {_id, username, purchasedCourses} = updatedUser;
  res.status(200).send({_id, username, purchasedCourses});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  const user = await User.findOne({username: req.username});

  // Return the Purchased Courses
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.status(200).send({courses});
});

module.exports = router;
