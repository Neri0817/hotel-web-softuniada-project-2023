const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        default: 'Ivan'
    },
    email: {
        type: String,
        default: 'admin@abv.bg',
    },
    password: {
        type: String,
        default: 'room',
    },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
