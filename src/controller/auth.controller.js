const usermodel = require('../models/user.model');
const tokenBlacklistModel = require('../models/blacklist.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
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

    //We need to hash the password before saving it to the database for security reasons.
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database with the hashed password
    const newUser = await usermodel.create({
        username,
        email,
        password: hashedPassword
    });

    // Generate a JWT token for the new user. This token can be used for authentication in subsequent requests.
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    //Sending the token in a cookie and returning a success response with the user details and token
    res.cookie("token", token)
    res.status(201).json({ message: 'User registered successfully',
         user : {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            token: token
        }});
}



/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
async function loginUserController(req, res) {
    //Destructuring the email and password from the request body
    const { email, password } = req.body; 
    
    //Find the user by email & returning error if not found
    const userFound = await usermodel.findOne({ email });
    if (!userFound) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    //Matching the password provided with the password in the db
    const isPasswordValid = await bcrypt.compare(password, userFound.password)

    //Creating a Similar Token as registration controller
    const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    //Sending the token in a cookie to the browser and a response status with user information
    res.cookie("token", token)
    res.status(201).json({ message: 'User Logged In Successfully',
         user : {
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            token: token
        }});


}


/**
 * @route POST /api/auth/logout
 * @desc Logout a user
 * @access Public
 */
async function logoutUserController(req, res) {
    const token = req.cookies.token;

    if (token) {
        // Add the token to the blacklist collection in the database
        await tokenBlacklistModel.create({ token });
    }       
    res.clearCookie("token");
    res.status(200).json({ message: 'User logged out successfully' });
}


module.exports = { registerUserController, loginUserController, logoutUserController };