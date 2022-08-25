import React, { Component } from "react";
class TaskForm extends Component {
  render() {
    return this.props.trigger ? (
      <div className="fixed w-full h-screen bg-[#464e55ba]">
        this is popup Component
        <button className="ml-4 bg-red-300 ">close</button>
      </div>
    ) : (
      ""
    );
  }
}

export default TaskForm;
