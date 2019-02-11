import React, { Component } from "react";
import * as chartOptions from "../utils/chart.props";

class HighchartsComponent extends Component {
  static propTypes = chartOptions.propTypes;
  static defaultProps = chartOptions.defaultProps;

  render() {
    return <h2 className="text-center">THis will be Highcharts Container</h2>;
  }
}

export default HighchartsComponent;
