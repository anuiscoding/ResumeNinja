const express = require('express');
const CookieParser = require("cookie-parser")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(CookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


/* All the Routes are to be required Here */
const authRouter = require('./routes/auth.routes');

/*Using all the routes here */
app.use('/api/auth', authRouter);//Mounting the Router- this tells the app to use the authRouter for any requests that start with /api/auth

module.exports = app;