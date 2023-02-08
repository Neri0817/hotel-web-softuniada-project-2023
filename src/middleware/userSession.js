const session = require('express-session');
const config = require('../config/config');

const userSessionMiddleware = session({
    secret: config.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: config.ONE_DAY }
});

module.exports = userSessionMiddleware;