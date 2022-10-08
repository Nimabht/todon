import React, { Component } from "react";
import { MdAdd } from "react-icons/md";
import SearchField from "./common/searchField";
import TaskTable from "./taskTable";
import axios from "axios";
import TaskForm from "./common/taskForm";
import { search } from "../utilies/searching";
import { toast } from "react-toastify";
import FilterButton from "./common/filter";
import { getTags } from "../utilies/getTags";
import { filter } from "../utilies/filtering";
class DashBoard extends Component {
  state = {
    user: {
      id: 0,
      username: "",
      password: "",
      tasks: [],
      taskSlot: "",
    },
    searchValue: "",
    buttonPopup: false,
    popupPosition: "",
    selectedTag: "All",
    tags: ["All", "Today"],
  };

  async componentDidMount() {
    const { data: users } = await axios.get("http://localhost:3000/users");
    let user = users.find(
      (user) => user.username === this.props.match.params.username
    );
    if (user === undefined) this.props.history.push(`/error404`);
    else {
      this.setState({ user });
    }
  }
  handleSearch = (e) => {
    let searchValue = this.state.searchValue;
    searchValue = e.currentTarget.value;
    console.log(searchValue);
    this.setState({ searchValue });
  };
  renderStatusNotif = (status) => {
    if (status) {
      return toast("Wow GOOD JOB!! 👍🏻", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return toast("Try Harder :(", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  renderFavoriteNotif = (favorite) => {
    if (favorite) {
      return toast("Added to favorites!⭐", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return toast("Removed from favorites!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  handleStatusChange = async (task) => {
    const user = { ...this.state.user };
    const index = user.tasks.indexOf(task);
    user.tasks[index].status = !user.tasks[index].status;
    axios.put(`http://localhost:3000/users/${user.id}`, user);
    this.setState({ user });
    this.renderStatusNotif(user.tasks[index].status);
  };
  handleFavoriteChange = async (task) => {
    const user = { ...this.state.user };
    const index = user.tasks.indexOf(task);
    user.tasks[index].favorite = !user.tasks[index].favorite;
    axios.put(`http://localhost:3000/users/${user.id}`, user);
    this.setState({ user });
    this.renderFavoriteNotif(task.favorite);
  };
  handleDelete = async (task) => {
    const user = { ...this.state.user };
    user.tasks = user.tasks.filter((t) => t !== task);
    axios.put(`http://localhost:3000/users/${user.id}`, user);
    this.setState({ user });
    toast.error("Task deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
        : filter(this.state.user.tasks, this.state.selectedTag);

    return { data: filtered };
  };
  handleTagSelect = (tag) => {
    this.setState({ selectedTag: tag });
  };
  render() {
    const { data: filtered } = this.getTaskData();

    return (
      <React.Fragment>
        <TaskForm
          className="z-10"
          user={this.state.user}
          trigger={this.state.buttonPopup}
          onPopup={() => this.handlePopup()}
          position={this.state.popupPosition}
        />

        <div className="sans p-1 flex flex-col font-semibold m-auto mt-20 rounded-xl container bg-slate-50 h-5/6 w-11/12 items-center	z-0">
          <div className="flex">
            <h1 className="mt-3 w-[96%] text-4xl text-cyan-600 border-b border-slate-300 p-2 w-11/12">
              {this.props.match.params.username}
            </h1>
            <p>{this.state.user.taskSlot}</p>
          </div>

          <div className="w-[90%] self-start mt-3 ml-12 flex gap-x-7 ">
            <button
              onClick={this.handlePopup}
              className="text-xl text-blue-700 inline"
            >
              <MdAdd className="text-3xl text-blue-700 inline " />
              Add
            </button>
            <SearchField
              value={this.state.searchValue}
              onChange={this.handleSearch}
            />
            <FilterButton
              items={[
                "All",
                "Today",
                "Favorites",
                ...getTags(this.state.user.tasks),
              ]}
              selectedTag={this.state.selectedTag}
              onItemSelect={this.handleTagSelect}
            />
          </div>
          {this.state.user.tasks.length === 0 && (
            <h1 className="text-6xl text-gray-400 p-[11rem]">Add new Task !</h1>
          )}
          <TaskTable
            username={this.state.user.username}
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
