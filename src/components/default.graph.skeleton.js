import React, { Component } from "react";
import * as graphProps from "../utils/graph.props";
import HighchartsComponent from "./highchartscomponent";

class GraphSkeleton extends Component {
  static propTypes = graphProps.propTypes;
  static defaultProps = graphProps.defaultProps;
  state = { myName: "AK" };

  render() {
    return (
      <div className="parent-container">
        <h1>
          This library is written by {this.state.myName}{" "}
          {this.props.chart_options.type}{" "}
        </h1>
        <HighchartsComponent />
      </div>
    );
  }
}

export default GraphSkeleton;
