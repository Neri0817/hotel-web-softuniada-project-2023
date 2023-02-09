const mongoose = require ('mongoose');

const adminSchema = new mongoose.Schema({
    username: "admin",
    email: 'admin@abv.bg',
    password: 'room',
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
