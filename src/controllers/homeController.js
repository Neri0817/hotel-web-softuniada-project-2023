const Destination = require('../models/Destination');

exports.getHomePage = async (req, res) => {
    // console.log('This prints from home-----');
    // console.log(req.session);
    // console.log(req.session.username);


    // const destinationFilter = await Destination.find({}).sort({ dateAdded: -1 }).exec();
    //     console.log('Destination result--------');
    //       console.log(destinationFilter);

    //       const result = await Destination.find({}).lean();

    //       if(result.length > 3) {
    //         result = result.splice(3, result.length - 3);
    //       }
         
    //       console.log('Result---');
    //      console.log(result[0].name);

    // res.render('home', {name: result[0].name, imageUrl: result[0].imageUrl, price: result[0].price});
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