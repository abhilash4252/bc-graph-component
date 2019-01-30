import React, { Component } from "react";
import GraphSkeleton from "./components/default.graph.skeleton";

export default class extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to React components</h2>
        <GraphSkeleton />
      </div>
    );
  }
}
