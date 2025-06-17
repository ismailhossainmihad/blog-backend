const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { createBlog, getBlogs, updateBlog, deleteBlog } = require('../controllers/blogController');

router.post('/', protect, createBlog);
router.get('/', protect, getBlogs);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);

module.exports = router;