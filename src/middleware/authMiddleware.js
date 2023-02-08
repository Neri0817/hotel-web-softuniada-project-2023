

exports.autentication = async (req, res, next) => {
    const session  = req.session;

    if(session.user){
        try {
            req.user = session.user;
            req.isAutenticated  = true;
            res.locals.username = session.username
            res.locals.isAutenticated = true;
        } catch (error) {
            console.log(error.message);
            return;
        }
    }

    next();
};

exports.isAutenticated = (req, res, next) => {

    if (!req.isAutenticated) {
        return res.redirect('/login');
    }

    next();
};