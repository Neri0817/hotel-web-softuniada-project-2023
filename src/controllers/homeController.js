exports.getHomePage = async (req, res) => {
    res.render('home');
};

exports.getAboutPage = (req, res) => {
    res.render('about');
}


exports.getContactPage = (req, res) => {
    res.render('contact');
}

exports.postContactPage = async(req, res) => {
    const { name, email, subject, message} = req.body;

    const info = 'Your message has been subbmitted. Someone from our team will reach you soon';

    res.render('contact', {info});
}