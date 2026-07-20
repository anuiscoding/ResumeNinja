const express = require('express');
const CookieParser = require("cookie-parser")

const app = express();
app.use(express.json());
app.use(CookieParser())


/* All the Routes are to be required Here */
const authRouter = require('./routes/auth.routes');

/*Using all the routes here */
app.use('/api/auth', authRouter);//Mounting the Router- this tells the app to use the authRouter for any requests that start with /api/auth

module.exports = app;