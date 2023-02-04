const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
    },
    // lastName: {
    //     type: String,
    //     required: true,
    //     minLength: 2,
    // },
    // username: {
    //     type: String,
    //     required: true,
    //     minLength: 5
    // },
    email: {
        type: String,
        required: true,
        match: [/[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, 'Invalid email or password!']
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;