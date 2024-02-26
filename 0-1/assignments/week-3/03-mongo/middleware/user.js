const {User} = require('../db');

const userMiddleware = async (req, res, next) => {
  const user = await User.findOne({
    username: req.headers.username,
    password: req.headers.password,
  });

  if (!user) return res.status(400).send(`Invalid Email or Password.`);

  next();
};

module.exports = userMiddleware;
