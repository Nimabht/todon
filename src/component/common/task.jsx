import React, { Component } from "react";
class Task extends Component {
  state = {
    title: "Title",
    describe:
      "doing some shit and after that lest fuck and do something fun too 💀",
  };
  render() {
    return (
      <div className="shadow-xl items-center flex self-start bg-teal-100 w-10/12 h-1/4 ml-14 rounded-2xl	 mt-10">
        <h1 className="p-2 ">{this.state.title}</h1>
      </div>
    );
  }
}

export default Task;
