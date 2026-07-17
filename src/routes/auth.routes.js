const express = require('express');
const authRouter = express.Router();
const authController = require('../controller/auth.controller');

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post('/register', authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @description Log in user with email and password
 * @access Public
 */
authRouter.post('/login', authController.loginUserController)

/**
 * @route POST /api/auth/refresh-token
 * @description clear token from user cookie and add the token in blacklist
 * @access Public
 */
authRouter.post('/logout', authController.logoutUserController);


module.exports = authRouter;