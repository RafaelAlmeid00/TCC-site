/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const session = require('express-session');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: 'sazuki',
    resave: false,
    saveUninitialized: false,
    cookie:{
    expires: 1000*60*60*24,
    }
})); 

app.use(cors({
    credentials: true
}));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(routes);

app.listen('3344', console.log("Server on in door 3344"));
