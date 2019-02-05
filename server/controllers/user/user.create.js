const User = require('../../lib/user');

module.exports = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};
