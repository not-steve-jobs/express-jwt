const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');
const { validationResult } = require('express-validator');
const { signUpService, signInService } = require("../services/authService");

signUp = (req, res) => {
    checkErrors(res, req);

    return signUpService(req, res);
}

signIn = (req, res) => {
    checkErrors(res, req);

    return signInService(req, res);
}

protectedRoute = (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
}

checkErrors = (res, req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}

module.exports = { signUp, signIn, protectedRoute };
