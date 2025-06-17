const Blog = require('../models/blogModel');

exports.createBlog = async (req, res) => {
  const blog = await Blog.create({ ...req.body, user: req.user });
  res.json(blog);
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({ user: req.user });
  res.json(blogs);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findOneAndUpdate({ _id: req.params.id, user: req.user }, req.body, { new: true });
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findOneAndDelete({ _id: req.params.id, user: req.user });
  res.json({ message: 'Blog deleted' });
};