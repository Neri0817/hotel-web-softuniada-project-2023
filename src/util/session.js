
module.exports = {
    setSession: (req, res, username, user) => {
      const session = req.session;
      session.username = username;
      session.user = user;
      req.isAuthenticated = true;
      res.locals.username = username;
      res.locals.isAuthenticated = true;
    }
  };
