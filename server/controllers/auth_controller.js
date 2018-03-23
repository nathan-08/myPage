const users = require("../models/users");

module.exports = {
  authenticateUser: function(req, res) {
    const { username, password } = req.body;
    const match = users.find(user => user.username === username && user.password === password);
    if (match) {
      console.log("authenticated...");
      req.session.user.username = username;
      req.session.user.loggedIn = true;
      req.session.user.preferences = match.preferences;
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(401);
    }
  },
  signup: function(req, res) {
    console.log("signing up new user");
    const { username, password } = req.body;
    const match = users.find(user => user.username === username);
    if (match) {
      console.log("username taken");
      res.status(500).send({ error: "username taken" });
    } else {
      console.log("username available");
      const newUser = {
        username,
        password,
        loggedIn: true,
        preferences: {
          bgc: "cornflowerBlue",
          fontColor: "pink",
          favoriteThing: "bird",
          title: "welcome to awesome page",
          message: "nerner",
          fontIndex: 0
        }
      };
      req.session.user = Object.assign({}, newUser, { password: "" });
      users.push(newUser);
      res.status(200).send(req.session.user);
    }
  },
  checkLoggedIn: function(req, res) {
    console.log("checkin user", req.session.user);
    res.status(200).send(req.session.user);
  },
  updateUser: function(req, res) {
    const preferences = req.body;
    console.log("got this", req.body);
    const matchingIndex = users.findIndex(user => user.username === req.session.user.username);
    users[matchingIndex].preferences = Object.assign({}, preferences);
    req.session.user.preferences = Object.assign({}, preferences);
    console.log("updated stuff", req.session.user.preferences);
    res.sendStatus(200);
  },
  logout: function(req, res) {
    req.session.destroy();
    res.status(200).send(req.session);
  }
};
