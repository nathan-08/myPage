import React, { Component } from "react";
import images from "./images";
import fontFamilies from "./fontFamilies.js";
import axios from "axios";

export default class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      editorOpen: false,
      loggedIn: true,
      fontFamilies: fontFamilies,
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
  componentDidMount() {
    // request session user data to ensure user is logged in
    // use /check endpoint
    // get user saved preferences
  }
  logout() {
    // hit get logout endpoint to destroy session data
    this.props.history.push("/");
  }
  toggleEditor() {
    this.setState({ editorOpen: !this.state.editorOpen });
  }
  savePreferences() {
    // send preferences to server using put /preferences
    this.setState({ editorOpen: !this.state.editorOpen });
  }

  render() {
    console.log("state", this.state);
    return (
      <div>
        <div
          className="UserPage component"
          style={{
            backgroundColor: this.state.preferences.bgc,
            fontFamily: this.state.fontFamilies[this.state.fontIndex],
            color: this.state.preferences.fontColor
          }}
        >
          <h1>{this.state.preferences.title}</h1>

          <div className="mid-container">
            <p>{this.state.preferences.message}</p>
            <img src={images[this.state.preferences.favoriteThing]} height="200px" width="200px" />
            {this.state.editorOpen && (
              <div className="form">
                <span>
                  <p>bg color</p>
                  <input
                    type="text"
                    value={this.state.preferences.bgc}
                    placeholder="backgroundcolor"
                    onChange={e =>
                      this.setState({
                        preferences: Object.assign({}, this.state.preferences, { bgc: e.target.value })
                      })
                    }
                  />
                </span>
                <span>
                  <p>text color</p>
                  <input
                    value={this.state.preferences.fontColor}
                    placeholder="text color"
                    onChange={e =>
                      this.setState({
                        preferences: Object.assign({}, this.state.preferences, { fontColor: e.target.value })
                      })
                    }
                  />
                </span>
                <span>
                  <p>favorite thing</p>
                  <select
                    value={this.state.preferences.favoriteThing}
                    onChange={e =>
                      this.setState({
                        preferences: Object.assign({}, this.state.preferences, { favoriteThing: e.target.value })
                      })
                    }
                  >
                    <option value={"bird"}>bird</option>
                    <option value={"cake"}>cake</option>
                    <option value={"nintendo"}>video games</option>
                    <option value={"friendship"}>friendship</option>
                    <option value={"cinema"}>cinema</option>
                  </select>
                </span>
                <span>
                  <p>page title</p>
                  <input
                    value={this.state.preferences.title}
                    placeholder="title"
                    onChange={e =>
                      this.setState({
                        preferences: Object.assign({}, this.state.preferences, { title: e.target.value })
                      })
                    }
                  />
                </span>
                <span>
                  <p>page message</p>
                  <input
                    value={this.state.preferences.message}
                    placeholder="enter a special message"
                    onChange={e =>
                      this.setState({
                        preferences: Object.assign({}, this.state.preferences, { message: e.target.value })
                      })
                    }
                  />
                </span>
                <span>
                  <p>font family</p>
                  <select
                    style={{ fontFamily: this.state.fontFamilies[this.state.preferences.fontIndex] }}
                    onChange={e => this.setState({ fontIndex: e.target.value })}
                  >
                    <option value={0} style={{ fontFamily: this.state.fontFamilies[0] }}>
                      Georgia
                    </option>
                    <option value={1} style={{ fontFamily: this.state.fontFamilies[1] }}>
                      Palatino
                    </option>
                    <option value={2} style={{ fontFamily: this.state.fontFamilies[2] }}>
                      Times New Roman
                    </option>
                    <option value={3} style={{ fontFamily: this.state.fontFamilies[3] }}>
                      Helvetica
                    </option>
                    <option value={4} style={{ fontFamily: this.state.fontFamilies[4] }}>
                      Arial Black
                    </option>
                    <option value={5} style={{ fontFamily: this.state.fontFamilies[5] }}>
                      Comic Sans
                    </option>
                    <option value={6} style={{ fontFamily: this.state.fontFamilies[6] }}>
                      Impact
                    </option>
                    <option value={7} style={{ fontFamily: this.state.fontFamilies[7] }}>
                      Lucida Sans
                    </option>
                    <option value={8} style={{ fontFamily: this.state.fontFamilies[8] }}>
                      Courier New
                    </option>
                    <option value={9} style={{ fontFamily: this.state.fontFamilies[9] }}>
                      Lucida Console
                    </option>
                  </select>
                </span>
                <button onClick={() => this.savePreferences()}>Done</button>
              </div>
            )}
          </div>
          <br />

          {!this.state.editorOpen && <button onClick={() => this.toggleEditor()}>edit</button>}
          <button onClick={() => this.logout()}>logout</button>
        </div>
      </div>
    );
  }
}
