module.exports = function(req, res, next) {
  if (!req.session.user) {
    req.session.user = {
      username: "",
      loggedIn: false,
      preferences: {
        bgc: "cornflowerBlue",
        fontColor: "pink",
        favoriteThing: "bird",
        title: "welcome to awesome page",
        message: "nerner",
        fontIndex: 0
      }
    };
  }
  next();
};
