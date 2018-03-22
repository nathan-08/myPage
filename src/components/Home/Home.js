import React, { Component } from "react";
import images from "../UserPage/images";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      pwInput: "",
      newName: "",
      newPw: ""
    };
  }
  login() {
    console.log("loggin in...");
    // post to /login endpoint username and password
    this.props.history.push("/userpage");
  }

  signup() {
    console.log("signing in...");
    // post to /signup endpoint username and password
    this.props.history.push("/userpage");
  }

  render() {
    return (
      <div className="Home component">
        <div className="title">
          <img src={images.bird} height="50" width="50" />
          <h1>Awesome Page</h1>
        </div>
        <p>Sign up to experience the experience</p>
        <div className="signup">
          <h3>New to Awesome Page? Create Account</h3>
          <input
            type="text"
            value={this.state.newName}
            placeholder="username"
            onChange={e => this.setState({ newName: e.target.value })}
          />
          <input type="password" placeholder="password" onChange={e => this.setState({ newPw: e.target.value })} />
          <button onClick={() => this.signup()}>Sign Up</button>
        </div>
        <div className="login">
          <h3>Already a member?</h3>
          <input
            type="text"
            value={this.state.nameInput}
            placeholder="username"
            onChange={e => this.setState({ nameInput: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.pwInput}
            onChange={e => this.setState({ pwInput: e.target.value })}
          />
          <button onClick={() => this.login()}>Login</button>
        </div>
      </div>
    );
  }
}

export default Home;
