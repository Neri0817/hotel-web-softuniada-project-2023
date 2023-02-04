const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async(name, email, password) => {
    const hash = await bcrypt.hash(password, 10);
    
    return await User.create({ name, email, password: hash });
};