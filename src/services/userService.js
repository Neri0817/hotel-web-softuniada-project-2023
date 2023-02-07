const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async (username, email, password) => {
    const hash = await bcrypt.hash(password, 10);

    return await User.create({ username, email, password: hash });
};

exports.checkUserExistence = (username) => User.findOne({ username });

exports.validateUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return null;
    } 

    return user;
};