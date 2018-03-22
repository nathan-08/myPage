import React from "react";

export default (
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
);
