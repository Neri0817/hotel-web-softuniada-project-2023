

exports.authentication = async (req, res, next) => {
    const session  = req.session;

    if(session.user){
        req.isAuthenticated = true;
        res.locals.isAuthenticated = true;
    }

    next();
};

exports.isAutenticated = (req, res, next) => {

    if (!req.isAutenticated) {
        return res.redirect('/login');
    }

    next();
};