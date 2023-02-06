const userService = require('../services/userService');

exports.getLogin = (req, res) => {
    res.render('sign-in');
}

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    // Validate user credentials
    try {
        const user = await userService.validateUser(username, password);
        if (!user) {
            return res.redirect('/404');
        }
        req.session.user = user;

        res.redirect('/');

    } catch (error) {
        console.log(`Error validating user: ${error}`);
        return res.redirect('/404');
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