const Admin = require('../models/Admin');

exports.getAdminPage = (req, res) => {
    res.render('admin');
};