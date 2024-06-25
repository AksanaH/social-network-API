const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find().populate({ path: 'thoughts', select: '-__v' });
      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const users = await User.findOne({ _id: req.params.userId }).populate({ path: 'thoughts', select: '-__v' });

      if (!user) {
        return res.status(404).json({ message: 'No users found with that ID' })
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
