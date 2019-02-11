import React, { Component } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import Example from "../../src";
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
