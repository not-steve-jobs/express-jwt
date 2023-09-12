const { body } = require('express-validator');

const signUpValidationRules = [
    body('username').notEmpty().isLength({ min: 4 }).withMessage('Username must be at least 4 characters long'),
    body('password').notEmpty().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const signInValidationRules = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
];

module.exports = { signUpValidationRules, signInValidationRules };
