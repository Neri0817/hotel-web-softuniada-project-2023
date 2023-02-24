const userService = require('../services/userService');
const session = require('../utils/session');
const { getErrorMessage, mapErrors } = require('../utils/errorUtils');
const destinationService = require('../services/destinationService');
const Destination = require('../models/Destination');

exports.getLogin = (req, res) => {
    const sessionBeforeLogin = req.session;
    res.locals.message = req.session.message;
    res.render('sign-in');
}

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userService.login(username, password);
        session.setSession(req, res, username, user);
        console.log('sesseionAfterLogin');
        console.log(req.session);
        res.redirect('/');
    } catch (err) {
              const error = mapErrors(err)
        console.log(`Error: ${error}`)
         res.render('sign-in', {error})
    }
}

exports.getRegister = (req, res) => {
    res.render('join');
};

exports.postRegister = async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    console.log(req.body);

    if (password !== repeatPassword) {
        //TODO: Error handling
        // return res.redirect('/404')
        res.render('join', {error: 'Password mismatch!'});
    }

    //TO DO: think of validator function to validate the data in each field

    const existingUser = await userService.checkUserExistence(username, email).lean();
    
    if (existingUser) {
        //TODO: Error handling
        // return res.redirect('/404')
        return res.render('join', {error: 'User already exists'});
    }

    try {
        await userService.register(username, email, password);
        res.redirect('/users/login');
    } catch (error) {
        console.log(`Error trying to POST register: ${error}`);
        return res.render('join', {error: getErrorMessage(error)});

    }
    
};

exports.logout = async (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.log(`Error destroying session: ${error}`);
        }
        res.redirect('/');
    });
};

exports.getProfile = async(req, res) => {
    const userId = req.session.user._id;
    const username = req.session.username;

    const createdDestinations = await destinationService.findAllByUserId(userId).lean();
    
    res.render('profile', { username ,createdDestinations } );
};

//user can recomend destination
exports.postProfile = async(req,res) => {
    const { name, guestCapacity, amenities, price, imageUrl } = req.body;

    const destination = new Destination({
        name,
        guestCapacity,
        amenities,
        imageUrl,
        price,
        destinationOwner: req.session.user._id
    });

    try {
        await destination.save();
        res.redirect('/users/profile');
    } catch (err) {
        const error = mapErrors(err)
 res.render('profile', {error})
    }
};
