const users = require("../models/users");

module.exports = {
  authenticateUser: function(req, res, next) {
    console.log("authenticating....");
    console.log(req.body);
    // check req.username and req.password against users array

    if (users.find(user => user.username === req.body.username && user.password === req.body.password)) {
      console.log("authenticated");
      req.session.user.username = req.body.username;
      req.session.user.loggedIn = true;
      console.log(users[users.findIndex(user => user.username === req.body.username)]);
      req.session.user.preferences = users[users.findIndex(user => user.username === req.body.username)].preferences;

      res.status(200).send(req.session.user);
    } else {
      console.log("user not found");
      res.sendStatus(500);
    }
  },
  signUp: function(req, res, next) {
    //check for duplicate username
    if (users.find(user => user.username === req.body.username)) {
      console.log("username taken");
      res.status(500).send({ ERROR: "USERNAME TAKEN" });
      return;
    } else {
      users.push({
        username: req.body.username,
        password: req.body.password,
        preferences: req.session.user.preferences
      });
      req.session.user.username = req.body.username;
      req.session.user.loggedIn = true;
      res.sendStatus(200);
    }
  },
  checkLoggedIn: function(req, res, next) {
    console.log("sending: ", req.session.user);
    res.status(200).send(req.session.user);
  },
  updateUser: function(req, res, next) {
    //find user in db
    const userIndex = users.findIndex(user => user.username === req.session.user.username);
    console.log("req.body", req.body);
    users[userIndex].preferences = Object.assign({}, req.body);
    req.session.user.preferences = Object.assign({}, req.body);
    console.log(users[userIndex].preferences.favoriteThing);
    res.status(200).send(req.body);
  },
  logout: function(req, res, next) {
    req.session.destroy();
    res.status(200).send(req.session);
  }
};
