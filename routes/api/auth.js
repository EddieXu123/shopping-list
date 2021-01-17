const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

const jwtSecret = require('../../config/keys').jwtSecret;

// Bring in User Model
const User = require('../../models/User');

/**
 * @route   POST api/auth
 * @desc    Authenticate user
 * @access  Public
 */
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please Enter All Fields' });
    }

    // Check for existing user
    User.findOne({email: email})
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exist' });

            // Validate password
            // Need to compare plain-text password with hashed password in DB
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

                    jwt.sign(
                        { id: user.id },
                        jwtSecret,
                        { expiresIn: 3600 }, // Token lasts for an hour,
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token: token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })


        })
});

/**
* @route   GET api/auth/user
* @desc    Get user data
* @access  Private
*/
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password') // disregard password
        .then(user => res.json(user));
})

module.exports = router;