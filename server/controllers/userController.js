const User = require('../models/User');
const Post = require('../models/Post');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  const posts = await Post.find({ author: user._id }).sort({ createdAt: -1 });
  res.json({ user, posts });
};

exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
