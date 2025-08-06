// server/controllers/postController.js
const Post = require('../models/Post');
exports.createPost = async (req, res) => {
  const userId = req.userId;
  const post = await Post.create({ author: userId, content: req.body.content });
  res.status(201).json(post);
};

exports.getFeed = async (req, res) => {
  const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
  res.json(posts);
};