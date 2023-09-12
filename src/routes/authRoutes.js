const express = require('express');
const { signUp, signIn, protectedRoute } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');
const { signUpValidationRules, signInValidationRules } = require('../middleware/validators');

const router = express.Router();

router.post('/signup', signUpValidationRules, signUp);
router.post('/signin', signInValidationRules, signIn);
router.get('/protected', verifyToken, protectedRoute);

module.exports = router;
