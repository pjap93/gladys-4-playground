const gladys = require('../../lib/');

module.exports = async (req, res) => {
  const newUser = await gladys.user.create(req.body);
  res.status(201).json(newUser);
};
