
module.exports = {
    setSession: (req, username, user) => {
      const session = req.session;
      session.username = username;
      session.user = user;
      req.isAuthenticated = true;
    }
  };
