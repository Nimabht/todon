import React, { Component } from "react";
class Input extends Component {
  render() {
    return (
      <div className="w-56 flex flex-col gap-y-1">
        <label htmlFor={this.props.name}>{this.props.label}:</label>
        <input
          style={{ transition: "0.3s" }}
          className="p-2 rounded focus:outline-none focus:border-sky-500	 focus:border-2"
          placeholder={this.props.label}
          type={this.props.type}
          id={this.props.name}
        />
      </div>
    );
  }
}

export default Input;
