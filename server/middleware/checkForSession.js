module.exports = function(req, res, next) {
  if (!req.session.user) {
    console.log("creating new user");
    req.session.user = {
      username: "",
      loggedIn: false,
      preferences: {}
    };
  }
  next();
};
