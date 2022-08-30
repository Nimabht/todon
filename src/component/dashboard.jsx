import React, { Component } from "react";
import { MdAdd } from "react-icons/md";
import SearchField from "./common/searchField";
import TaskTable from "./taskTable";
import axios from "axios";
import TaskForm from "./common/taskForm";
import { search } from "../utilies/searching";

class DashBoard extends Component {
  state = {
    user: {
      id: 0,
      username: "",
      password: "",
      tasks: [],
    },
    searchValue: "",
    buttonPopup: false,
    popupPosition: "",
  };

  async componentDidMount() {
    const { data: users } = await axios.get("http://localhost:3000/users");
    const user = users.find(
      (user) => user.username === this.props.match.params.username
    );
    this.setState({ user });
  }
  handleSearch = (e) => {
    let searchValue = this.state.searchValue;
    searchValue = e.currentTarget.value;
    console.log(searchValue);
    this.setState({ searchValue });
  };
  handleStatusChange = async (task) => {
    const user = { ...this.state.user };
    const index = user.tasks.indexOf(task);
    user.tasks[index].status = !user.tasks[index].status;
    axios.put(`http://localhost:3000/users/${user.id}`, user);
    this.setState({ user });
  };
  handleFavoriteChange = async (task) => {
    const user = { ...this.state.user };
    const index = user.tasks.indexOf(task);
    user.tasks[index].favorite = !user.tasks[index].favorite;
    axios.put(`http://localhost:3000/users/${user.id}`, user);
    this.setState({ user });
  };
  handleDelete = async (task) => {
    const user = { ...this.state.user };
    user.tasks = user.tasks.filter((t) => t !== task);
    axios.put(`http://localhost:3000/users/${user.id}`, user);
    this.setState({ user });
  };
  handlePopup = (task) => {
    let buttonPopup = this.state.buttonPopup;
    buttonPopup = !buttonPopup;
    const popupPosition = task;
    this.setState({ buttonPopup, popupPosition });
  };
  getTaskData = () => {
    const filtered =
      this.state.searchValue !== ""
        ? search(this.state.user.tasks, this.state.searchValue)
        : this.state.user.tasks;

    return { data: filtered };
  };
  render() {
    const { data: filtered } = this.getTaskData();
    return (
      <React.Fragment>
        <TaskForm
          user={this.state.user}
          trigger={this.state.buttonPopup}
          onPopup={() => this.handlePopup()}
          position={this.state.popupPosition}
        />

        <div className=" p-1 flex flex-col font-semibold m-auto mt-20 rounded-xl container bg-slate-100 h-5/6 w-11/12 items-center	">
          <h1 className="mt-3 w-[96%] text-4xl text-cyan-600 border-b border-slate-300 p-2 w-11/12">
            {this.props.match.params.username}
          </h1>
          <div className="self-start mt-3 ml-12 flex gap-x-7">
            <button
              onClick={this.handlePopup}
              className="text-xl text-blue-700 inline"
            >
              <MdAdd className="text-3xl text-blue-700 inline" />
              Add
            </button>
            <SearchField
              value={this.state.searchValue}
              onChange={this.handleSearch}
            />
          </div>
          <TaskTable
            id={this.state.user.id}
            onStatus={this.handleStatusChange}
            onFavorite={this.handleFavoriteChange}
            onDelete={this.handleDelete}
            tasks={filtered}
            trigger={this.state.buttonPopup}
            onPopup={this.handlePopup}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoard;
