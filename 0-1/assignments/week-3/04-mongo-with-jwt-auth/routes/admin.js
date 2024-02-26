const {Router} = require('express');
// const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {Admin, Course, validate, validateCourse} = require('../db/index');
const adminMiddleware = require('../middleware/admin');
const secret = require('../config/default.json');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
  // Validate the Input
  const input = validate(req.body);
  if (!input.success) return res.status(400).send(input.error.message);

  let admin = await Admin.findOne({username: req.body.username});

  // Check if Admin already Exists
  if (admin) return res.status(400).send(`Admin already registered.`);

  // Create New Admin
  admin = new Admin({
    username: req.body.username,
    password: req.body.password,
  });
  admin.password = await bcrypt.hash(admin.password, 10);
  await admin.save();

  // Return the New Admin
  const {_id, username} = admin;
  res.status(200).send({_id, username});
});

router.post('/signin', async (req, res) => {
  // Validate the Input
  const input = validate(req.body);
  if (!input.success) return res.status(400).send(input.error.message);

  // Validate Username
  let admin = await Admin.findOne({username: req.body.username});
  if (!admin) return res.status(400).send(`Invalid Email or Password.`);

  // Validate Password
  const validPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!validPassword) return res.status(400).send(`Invalid Email or Password.`);

  const token = jwt.sign({username: admin.username}, secret.jwtSecret);
  res.send(token);
});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Validate the Input
  const input = validateCourse(req.body);
  if (!input.success) return res.status(400).send(input.error.message);

  // Add Course
  let course = new Course({
    title: req.body.title,
    description: req.body.description,
    imagelink: req.body.imagelink,
    price: req.body.price,
  });
  course = await course.save();

  // Return the New Course
  const {_id, title} = course;
  res.status(200).send({_id, title});
});

router.get('/courses', adminMiddleware, async (req, res) => {
  const courses = await Course.find().sort({title: 1});
  // Return the courses
  res.send(courses);
});

module.exports = router;
