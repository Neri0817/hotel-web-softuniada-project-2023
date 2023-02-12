const Destination = require('../models/Destination');

exports.getHomePage = async (req, res) => {

    let result = await Destination.find({}).sort({ dateAdded: -1 }).lean();

          if(result.length > 3) {
            result = result.slice(0, 3);
          }

    res.render('home', {result});
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
exports.notFoundPage = async (req, res) => {



    res.render('404')
}
