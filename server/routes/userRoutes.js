const router = require('express').Router();
const { getProfile, getMyProfile } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
router.get('/me', authMiddleware, getMyProfile); 
router.get('/:id', getProfile);
module.exports = router;