import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import React, { Component } from "react";
class CheckButton extends Component {
  renderIcon = () => {
    if (this.props.status)
      return (
        <BsCheckCircleFill className="duration-100 hover:drop-shadow-check" />
      );
    return <BsCheckCircle className=" duration-100 hover:drop-shadow-check" />;
  };
  render() {
    return (
      <button
        className="text-4xl text-green-500 ml-3"
        onClick={this.props.onClick}
      >
        {this.renderIcon()}
      </button>
    );
  }
}

export default CheckButton;
