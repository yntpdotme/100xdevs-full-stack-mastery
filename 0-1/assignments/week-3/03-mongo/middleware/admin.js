const {Admin} = require('../db');

// Middleware for handling auth
const adminMiddleware = async (req, res, next) => {
  const admin = await Admin.findOne({
    username: req.headers.username,
    password: req.headers.password,
  });

  if (!admin) res.status(403).send('Access Denied');

  next();
};

module.exports = adminMiddleware;
