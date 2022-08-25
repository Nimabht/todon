import React, { Component } from "react";
import { MdDeleteOutline } from "react-icons/md";
class DeleteButton extends Component {
  render() {
    return (
      <button
        className="text-[2.5rem] text-red-500 hover:drop-shadow-delete duration-100"
        onClick={this.props.onClick}
      >
        <MdDeleteOutline />
      </button>
    );
  }
}

export default DeleteButton;
