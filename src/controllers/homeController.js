exports.getHomePage = async (req, res) => {
    console.log('Log at GET home page');
    console.log('username');
    console.log(res.locals.username);
    console.log('session');
    console.log(req.session);
    console.log('res.locals.isAuthenticated')
    console.log(res.locals.isAuthenticated)
    console.log('req.isAuthenticated')
    console.log(req.isAuthenticated)
    res.render('home');
};

exports.getAboutPage = (req, res) => {
    res.render('about');
}

//Contact page content needs to be updated in contact.hbs file
exports.getContactPage = (req, res) => {
    console.log('Log at GET contact page');
    console.log('username');
    console.log(res.locals.username);
    console.log('session');
    console.log(req.session);
    console.log('res.locals.isAuthenticated')
    console.log(res.locals.isAuthenticated)
    console.log('req.isAuthenticated')
    console.log(req.isAuthenticated)
    res.render('contact');
}