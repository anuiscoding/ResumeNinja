const usermodel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * 
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

async function registerUserController(req, res) {
    const { username, email, password } = req.body;

    //If any of the fields are missing, return a 400 Bad Request response
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    //Check if the user already exists
    const existingUser = await usermodel.findOne({ 
        $or: [{ username }, { email }]
     });

    if (existingUser) {
        return res.status(400).json({ message: 'Username or Email already exists' });
    }       

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new usermodel.create({
        username,
        email,
        password: hashedPassword
    });


}

module.exports = { registerUserController };