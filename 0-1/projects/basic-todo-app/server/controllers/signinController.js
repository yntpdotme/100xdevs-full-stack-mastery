import bcrypt from 'bcrypt';

import {validateLogin} from '../validators/types.js';
import {User} from '../models/User.js';

const loginUser = async (req, res) => {
  const {error} = validateLogin(req.body);
  if (error) return res.status(400).send(error.issues[0].message);

  let user = await User.findOne({email: req.body.email});
  if (!user)
    return res.status(400).send(`The username and password do not match.`);

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send(`The username and password do not match.`);

  const token = user.generateAuthToken();

  res.json({
    status: 'success',
    access_token: token,
    token_type: 'Bearer',
  });
};

export {loginUser};
