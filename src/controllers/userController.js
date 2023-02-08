const userService = require('../services/userService');
const session = require('../util/session');

exports.getLogin = (req, res) => {
    // const session = req.session;
    // console.log('GET login')
    // console.log('session');
    // console.log(session);
    // if (session.username) {
    //     res.send(`Welcome ${session.username} <a href=\'/users/logout'>click to logout</a>`);
    // } else {
    //     res.render('sign-in');
    // }
    res.render('sign-in');
}

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userService.login(username, password);
        session.setSession(req, username, user);

        res.locals.username = username;
        res.locals.isAuthenticated = true;
        res.redirect('/');

        console.log('Log at postLogin');
        console.log('user');
        console.log(user);
        console.log('session'); 
        console.log(req.session);
        

    } catch (error) {
        console.log(`Error: ${error}`)
        //not sure if we need to destroy the session
        //req.session.destroy();
    }
}

exports.getRegister = (req, res) => {
    res.render('join');
};

exports.postRegister = async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        //TODO: Error handling
        return res.redirect('/404')
    }


    //TO DO: think of validator function to validate the data in each field

    const existingUser = await userService.checkUserExistence(username);

    if (existingUser) {
        //TODO: Error handling
        return res.redirect('/404')
    }

    try {
        await userService.register(username, email, password);
    } catch (error) {
        console.log(`Error trying to POST register: ${error}`);
    }
    res.redirect('/users/login');
};

exports.logout = async(req, res) => {
    req.session.destroy((error) => {if(error) {
        console.log(`Error destroying session: ${error}`);
    }
        res.redirect('/');
    });
};