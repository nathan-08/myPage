import React, { Component } from "react";
import images from "../../images";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      pwInput: ""
    };
  }
  login() {
    console.log("loggin in...");
    this.props.history.push("/userpage");
  }
  signup() {
    console.log("signing in...");
  }

  render() {
    return (
      <div className="Home component">
        <div className="title">
          <img src={images.bird} height="50" width="50" />
          <h1>Awesome Page</h1>
        </div>
        <p>Sign up to join the experience</p>
        <div className="login">
          <p>Already a member?</p>
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
        <div className="signup">
          <p>New to MyPage? Create Account</p>
          <input
            type="text"
            value={this.state.newName}
            placeholder="username"
            onClick={e => this.setState({ newName: e.target.value })}
          />
          <input type="password" placeholder="password" />
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Home;
