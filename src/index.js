import React, { Component } from "react";
import GraphSkeleton from "./components/default.graph.skeleton";

export default class extends Component {
  render() {
    const headerWrapper = ["header_wrapper"];
    return (
      <div>
        <h2>Welcome to React components</h2>
        <GraphSkeleton header_wrapper={headerWrapper} />
      </div>
    );
  }
}
