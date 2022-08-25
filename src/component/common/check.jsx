import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import React, { Component } from "react";
class CheckButton extends Component {
  renderIcon = () => {
    if (this.props.status) return <BsCheckCircleFill />;
    return <BsCheckCircle />;
  };
  render() {
    return (
      <button className="text-4xl text-green-500" onClick={this.props.onClick}>
        {this.renderIcon()}
      </button>
    );
  }
}

export default CheckButton;
