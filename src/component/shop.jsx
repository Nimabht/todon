import React, { Component } from "react";
class Shop extends Component {
  state = {};
  render() {
    return <h1>{`Shop for ${this.props.match.params.username}`}</h1>;
  }
}

export default Shop;
