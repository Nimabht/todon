import React, { Component } from "react";
class DashBoard extends Component {
  state = {};
  render() {
    return <h1>{`Dashboard for ${this.props.match.params.username}`}</h1>;
  }
}

export default DashBoard;
