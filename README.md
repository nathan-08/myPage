# Using express-session to handle multiple users

## Clone the repo

* CD into the root directory of the project
* run `npm i`
* run `git fetch --all` to get all the branches
* run `git checkout no-server` to switch to the branch we will be working on

## What we will be working on

* Connecting our front end to our server
* Using express-session to store user data and keep track of logged in users
* Create a full CRUD server with endpoints to log in and log out users, create new users, update user data.

### HOME

* Edit the login function to axios post to the login endpoint with username and password
* Edit the signup endpoint to post to the signup endpoint with username and password

### USERPAGE

* create axios calls to communicate with our server
* use conditional rendering to ensure a user is logged in

### SERVER SETUP

* create an index.js, controllers folder, middleware folder, models folder
* controllers folder should contain an `auth_controller.js`
* middleware folder should contain a `checkForSession.js`
* models folder should contain a `users.js`, which will contain our default user profile

### INDEX.JS

* we will need the following node packagees: express, express-session, body-parser, dotenv
* require dotenv and immediately invoke its config method.
* create a server called app (const) that is equall to express invoked.
* set up our middleware. Use body-parser so that we can send and receive JSON formatted data.
* Use session, passing in an object with secret, resave (false), and saveUninitialized (true)
* Use our own middleware, checkForSession
* We will have 5 endpoints
* post '/login', calls the authenticateUser function
* post '/signup', calls the signUp function
* put '/prefernces', calls the updateUser function
* get '/check', calls the checkLoggedIn function
* get '/logout', calls the logout function
* define a port const (using 3008)
* have our server listen and console an affirming message.

### .ENV

* should have two variables: PORT and SESSION_SECRET

### AUTH CONTROLLER

* require users.js
* should export an object with the following methods: authenticateUser, signUp, checkLoggedIn, updateUser, logout
* authenticateUser should check whether given user data matches a user object in the users array. If so, update the session.user object with username, loggedIn (true) and preferences from the matching users array object. Send the session.user object with status 200. If no match, send status 401 with object {ERROR: 'UNAUTHORIZED'}
* signUp should check if username is taken. If so, return status 500 with object {ERROR: 'USERNAME TAKEN'}. If username not taken, push an object to the users array with the username and password from the req.body, and the preferences from session.user.prefernces. Set the session.user username to the req.body username and set session.user.loggedIn to true
* checkLoggedIn should send the session.user object with status 200
* updateUser should find the user in the users array with the username that matches the session.user. Then update the preferences on the users array user and on the session user object with the data provided by the client.
* logout should destroy the session data and send back req.session with status 200

### MIDDLEWARE

* In the middleware folder, create a file called checkForSession.js
* This file will export a function that takes req, res, and next parameters.
* If there is not session.user object, create one with username (an empty string), loggedIn (false), preferences (an object with bcg, fontColor, favoriteThing, title, message, fontIndex)
* at the end of the function, call next.

### EXTRA TODO

* Add error messages on Home component
