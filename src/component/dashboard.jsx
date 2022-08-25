import React, { Component } from "react";
import { MdAdd } from "react-icons/md";
import SearchField from "./common/searchField";
import TaskTable from "./taskTable";
import axios from "axios";
class DashBoard extends Component {
  state = {
    user: {
      id: 0,
      username: "",
      password: "",
      tasks: [],
    },
    searchValue: "",
  };
  async componentDidMount() {
    const { data: users } = await axios.get("http://localhost:3000/users");
    const user = users.find(
      (user) => user.username === this.props.match.params.username
    );
    this.setState({ user });
  }
  handleChange = (e) => {
    let searchValue = this.state.searchValue;
    searchValue = e.currentTarget.value;
    console.log(searchValue);
    this.setState({ searchValue });
  };
  handleStatusChange = (task) => {
    const user = { ...this.state.user };
    const index = user.tasks.indexOf(task);
    user.tasks[index].status = !user.tasks[index].status;
    this.setState({ user });
  };
  render() {
    return (
      <div className="flex flex-col font-semibold m-auto mt-20 rounded-xl container bg-slate-100 h-5/6 w-11/12 items-center	">
        <h1 className="mt-3 w-[96%] text-4xl text-cyan-600 border-b border-slate-300 p-2 w-11/12">
          {this.props.match.params.username}
        </h1>
        <div className="self-start mt-3 ml-12 flex gap-x-7">
          <button className="text-xl text-blue-700 inline">
            <MdAdd className="text-3xl text-blue-700 inline" />
            Add
          </button>
          <SearchField
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </div>
        <TaskTable
          onStatus={this.handleStatusChange}
          tasks={this.state.user.tasks}
        />
      </div>
    );
  }
}

export default DashBoard;
