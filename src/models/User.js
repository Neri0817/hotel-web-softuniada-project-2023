const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        //email validation
        match: [/[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, 'Invalid email or password!']
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    }
    //TO DO: relation to hotels - rooms that user has offered for hire
    //TO DO: relation to bookings - rooms that user have hired in the past
});

const User = mongoose.model('User', userSchema);

module.exports = User;