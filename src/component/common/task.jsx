import React, { Component } from "react";
import EditButton from "../edit";
import CheckButton from "./check";
import DeleteButton from "./delete";
import FavoriteButton from "./favorite";

class Task extends Component {
  render() {
    return (
      <div className="m-0 flex gap-x-4 items-center">
        <div className="m-0 h-[8rem] h-shadow-xl items-center flex self-start bg-purple-100	h-fit w-[90%] rounded-2xl gap-x-12 overflow-hidden	justify-between		">
          <h1 className="p-2 text-3xl ml-9 w-[7rem]">{this.props.title}</h1>
          <p
            className={
              this.props.task.status
                ? "p-3 h-fit w-[37rem] line-through"
                : "p-3 h-fit w-[37rem]"
            }
          >
            {this.props.description}
          </p>
          <span className="flex gap-x-1 p-8">
            <CheckButton
              status={this.props.task.status}
              onClick={() => this.props.onStatus(this.props.task)}
            />
            <DeleteButton
              onClick={() => this.props.onDelete(this.props.task)}
            />
            <FavoriteButton
              favorite={this.props.task.favorite}
              onClick={() => this.props.onFavorite(this.props.task)}
            />
          </span>
        </div>
        <EditButton task={this.props.task} id={this.props.id} />
      </div>
    );
  }
}

export default Task;
