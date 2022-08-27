import React, { Component } from "react";
class Input extends Component {
  render() {
    return (
      <div className="mb-2 w-56 flex flex-col gap-y-2">
        <label
          className={this.props.labelcc ? this.props.labelcc : ""}
          htmlFor={this.props.name}
        >
          {this.props.label}:
        </label>
        <input
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
          style={{ transition: "0.3s" }}
          className={
            this.props.inputcc
              ? this.props.inputcc
              : "p-2 rounded focus:outline-none focus:border-sky-500	 focus:border-2"
          }
          placeholder={this.props.label}
          type={this.props.name}
          id={this.props.name}
        />
        {this.props.error && (
          <p className="text-xs text-red-600	">{this.props.error}</p>
        )}
      </div>
    );
  }
}

export default Input;
