import React, { Component } from "react";
import images from "../../images";

export default class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      bgc: "cornflowerBlue",
      imgurl: "https://s3.amazonaws.com/siegrs/avatars/avatar_5a7faa0e9de59.png",
      title: "Awesome Page",
      editorOpen: false,
      fontFamilies: [
        "Georgia, serif",
        '"Palatino Linotype", "Book Antiqua", Palatino, serif',
        '"Times New Roman", Times, serif',
        "Arial, Helvetica, sans-serif",
        '"Arial Black", Gadget, sans-serif',
        '"Comic Sans MS", cursive, sans-serif',
        "Impact, Charcoal, sans-serif",
        '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
        '"Courier New", Courier, monospace',
        '"Lucida Console", Monaco, monospace'
      ],
      fontIndex: 0,
      fontColor: "pink",
      message: "welcome to my page",
      favoriteThing: "bird"
    };
  }
  toggleEditor() {
    this.setState({ editorOpen: !this.state.editorOpen });
  }
  render() {
    return (
      <div
        className="UserPage component"
        style={{
          backgroundColor: this.state.bgc,
          fontFamily: this.state.fontFamilies[this.state.fontIndex],
          color: this.state.fontColor
        }}
      >
        <h1>{this.state.title}</h1>

        <button onClick={() => this.toggleEditor()}>edit</button>
        <div className="mid-container">
          <p>{this.state.message}</p>
          <img src={images[this.state.favoriteThing]} height="200px" width="200px" />
          {this.state.editorOpen && (
            <div className="form">
              <span>
                <p>bg color</p>
                <input
                  value={this.state.bgc}
                  placeholder="backgroundcolor"
                  onChange={e => this.setState({ bgc: e.target.value })}
                />
              </span>
              <span>
                <p>text color</p>
                <input
                  value={this.state.fontColor}
                  placeholder="text color"
                  onChange={e => this.setState({ fontColor: e.target.value })}
                />
              </span>
              <span>
                <p>favorite thing</p>
                <select
                  value={this.state.favoriteThing}
                  onChange={e => this.setState({ favoriteThing: e.target.value })}
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
                  value={this.state.title}
                  placeholder="title"
                  onChange={e => this.setState({ title: e.target.value })}
                />
              </span>
              <span>
                <p>page message</p>
                <input
                  value={this.state.message}
                  placeholder="enter a special message"
                  onChange={e => this.setState({ message: e.target.value })}
                />
              </span>
              <span>
                <p>font family</p>
                <select
                  style={{ fontFamily: this.state.fontFamilies[this.state.fontIndex] }}
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
              <span>
                <button>Okay</button>
                <button>Cancel</button>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
