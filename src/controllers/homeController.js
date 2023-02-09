exports.getHomePage = async (req, res) => {
    res.render('home');
};

exports.getAboutPage = (req, res) => {
    res.render('about');
}

//Contact page content needs to be updated in contact.hbs file
exports.getContactPage = (req, res) => {
    res.render('contact');
}