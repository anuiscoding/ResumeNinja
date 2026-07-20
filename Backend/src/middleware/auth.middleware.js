const jwt = require('jsonwebtoken');
const tokenBlacklistModel = require("../models/blacklist.model");

async function authUser(req, res, next) {
    const token = req.cookies.token;  

    //If token is not present in the request.
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    //Check if the token is blacklisted
    const isBlacklisted = await tokenBlacklistModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }

    //Token present, Hence Verify the token,and extract the payload.
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        //If token is invalid or expired, return an error response.
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        //req is an object that travels through the request pipeline, and we can attach the decoded user information to it.
        req.user = decoded;
        next();
    });
}

module.exports = {authUser};