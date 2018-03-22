const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const checkForSession = require("./middleware/checkForSession");
require("dotenv").config();
const ac = require("./controllers/auth_controller");

const app = express();

app.use(bodyParser.json());
app.use(
  session({
    secret: "asdfasdfasfd",
    resave: false,
    saveUninitialized: true
  })
);

// app use check for session
app.use(checkForSession);

// auth endpoints
// check username and password against database
app.post("/login", ac.authenticateUser);
app.post("/signup", ac.signUp);
app.put("/preferences", ac.updateUser);
app.get("/check", ac.checkLoggedIn);
app.get("/logout", ac.logout);

const port = process.env.PORT || 3008;
app.listen(port, () => console.log(`0,0 listening ${port}`));
