const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async(firstName, email, password) => {
    const hash = await bcrypt.hash(password, 100);
    
    return await User.create({firstName, email, password: hash});
};