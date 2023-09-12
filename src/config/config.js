require('dotenv').config();

const secretKey = process.env.SECRET_KEY || 'default-secret-key';

module.exports = { secretKey };

