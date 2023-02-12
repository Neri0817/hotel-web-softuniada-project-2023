const User = require('../models/User');
const bcrypt = require('bcrypt');
const authService = require('../services/authService');

exports.register = async (username, email, password) => {
    const hash = await bcrypt.hash(password, 10);

    return await User.create({ username, email, password: hash });
};

exports.checkUserExistence = (username) => User.findOne({ username });

exports.login = async(username, password) => {
    try {
        const user = await authService.validateUser(username, password);
        if (!user) {
            throw 'Invalid username or password!';
        }
        
        return user;

    } catch (error) {
        console.log(`Error validating user: ${error}`);
        return
    }
};
