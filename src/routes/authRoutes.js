const express = require('express');
const { signUp, signIn, protectedRoute } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/protected', verifyToken, protectedRoute);

module.exports = router;
