import React, { Component } from "react";
import * as graphProps from "../utils/graph.props";
import HighchartsComponent from "./highchartscomponent";
import DatePicker from "./datepicker";

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
        <div className="card margin-top background-grey">
          <div class="card card-body ">
            <div className="row">
              <div className="col-4">Label1</div>
              <div className="col-8">
                <div className="float-right">
                  <span className="col-4">RadioButton1</span>
                  <span className="col-4">RadioButton2</span>
                  <span className="col-4">
                    <DatePicker />
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="card-body float-right">
              <div className="row">
                <div className="col-3">Label1</div>
                <div className="col-3">Label1</div>

                <div className="col-6 text-right">Label1</div>
              </div>
            </div>
            <HighchartsComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default GraphSkeleton;
