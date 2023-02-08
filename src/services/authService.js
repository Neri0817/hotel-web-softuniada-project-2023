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
    
    console.log('validateUser');
    console.log('user:');
    console.log(user);

    //const isValidUser = true;

    return user;
};