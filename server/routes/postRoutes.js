const router = require('express').Router();
const { createPost, getFeed } = require('../controllers/postController');
const { authMiddleware } = require('../middleware/authMiddleware');
router.get('/', getFeed);
router.post('/', authMiddleware, createPost);
module.exports = router;