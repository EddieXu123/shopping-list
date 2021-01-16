const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongoURI: process.env.mongoURI,
    jwtSecret: process.env.jwtSecret
} 