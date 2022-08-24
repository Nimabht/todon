import React, { Component } from "react";
import { MdAdd } from "react-icons/md";
import SearchField from "./common/searchField";
import Task from "./common/task";
class DashBoard extends Component {
  state = { user: {}, searchValue: "" };
  handleChange = (e) => {
    let searchValue = this.state.searchValue;
    searchValue = e.currentTarget.value;
    console.log(searchValue);
    this.setState({ searchValue });
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
        <div className=" overflow-auto h-full w-[96%]">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    );
  }
}

export default DashBoard;
