import React, { Component } from "react";
import CheckButton from "./check";

class Task extends Component {
  render() {
    return (
      <div className="shadow-xl items-center flex self-start bg-teal-100 w-10/12 h-1/4 ml-20 rounded-2xl gap-x-12 mt-10">
        <h1 className="p-2 text-3xl ml-9">{this.props.title}</h1>
        <p className={this.props.task.status ? "w-3/5 line-through" : "w-3/5"}>
          {this.props.description}
        </p>

        <CheckButton
          status={this.props.task.status}
          onClick={() => this.props.onStatus(this.props.task)}
        />
      </div>
    );
  }
}

export default Task;
