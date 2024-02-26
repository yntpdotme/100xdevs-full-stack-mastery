const jwt = require('jsonwebtoken');
const secret = require('../config/default.json');

// Middleware for handling auth
const adminMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send('Access Denied. No token provided.');

  try {
    const jwtToken = token.split(' ')[1];
    const decoded = jwt.verify(jwtToken, secret.jwtSecret);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = adminMiddleware;
