const bcrypt = require('bcrypt');
const userService = require('../services/userService');

exports.validateUser = async (username, password) => {
    const user = await userService.checkUserExistence(username);
    if (!user) {
        return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return null;
    } 

    return user;
};