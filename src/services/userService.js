const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async(username, email, password) => {
    const hash = await bcrypt.hash(password, 10);
    
    return await User.create({ username, email, password: hash });
};

exports.checkUserExistence = (username) => User.findOne({username});