import React, { Component } from "react";
import { render } from "react-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import "bootstrap/dist/css/bootstrap.css";

import Example from "../../src";
import "./userDefine.scss";
import "./custom.css";

class Demo extends Component {
  render() {
    return (
      <div className="container">
        <h1>bc-graph-component Demo</h1>
        <Example />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
