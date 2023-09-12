const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

// TODO: only for testing; this is from DB!
const users = [];

signUp = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);

    res.status(201).json({ message: 'User created successfully' });
}

signIn = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
        expiresIn: '1h',
    });

    res.json({ token });
}

protectedRoute = (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
}

module.exports = { signUp, signIn, protectedRoute };
