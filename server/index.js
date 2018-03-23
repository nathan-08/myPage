const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
require("dotenv").config();
const ac = require("./controllers/auth_controller");
const checkForSession = require("./middleware/checkForSession");

const app = express();

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(checkForSession);

app.post("/login", ac.authenticateUser);
app.post("/signup", ac.signup);
app.put("/preferences", ac.updateUser);
app.get("/check", ac.checkLoggedIn);
app.delete("/logout", ac.logout);

const port = process.env.PORT || 3008;
app.listen(port, () => console.log(`0,0 listening ${port}`));
