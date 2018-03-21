import React, { Component } from "react";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  render() {
    return <div className="About component">About component</div>;
  }
}
