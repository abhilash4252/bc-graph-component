import React, { Component } from "react";
import * as graphProps from "../utils/graph.props";
import HighchartsComponent from "./highchartscomponent";
import DatePicker from "./datepicker";
import Dropdown from "./dropdown";

class GraphSkeleton extends Component {
  static propTypes = graphProps.propTypes;
  static defaultProps = graphProps.defaultProps;
  state = { myName: "AK" };

  render() {
    const headerWrapper = this.props.header_wrapper
      ? Array.isArray(this.props.header_wrapper)
        ? this.props.header_wrapper.join(" ")
        : this.props.header_wrapper
      : "";

    return (
      <div className={"parent-container " + headerWrapper}>
        <h1>
          {/* This library is written by {this.state.myName}{" "} */}
          {/* {this.props.chart_options.type}{" "} */}
        </h1>
        <div className="card margin-top background-set text-right">
          <div className="row">
            <div className="col-2">Label1</div>
            <div className="col-10">
              <div className="">
                <span className="col-4">RadioButton1</span>
                <span className="col-4">RadioButton2</span>
                <span className="col-4">
                  {/* <DatePicker /> */}
                  <Dropdown />
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div className="row float-left">
            <div className="col-1 ">Label2</div>
            <div className="col-1">Label3</div>
            <div className="col-10 centre-text">
              <div>Label4</div>
            </div>
          </div>
          <HighchartsComponent />
        </div>
      </div>
    );
  }
}
function Button(props) {
  return (
    <button
      onClick={() => {
        console.log("hai");
        return <DatePicker />;
      }}
    >
      Date
    </button>
  );
}

export default GraphSkeleton;
