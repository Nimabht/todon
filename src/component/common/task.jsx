import React, { Component } from "react";
import EditButton from "./edit";
import CheckButton from "./check";
import DeleteButton from "./delete";
import FavoriteButton from "./favorite";
import { renderDate } from "./../../utilies/renderDate";
class Task extends Component {
  render() {
    return (
      <div className="m-0 flex  items-center task ">
        <div className="m-0 h-[5rem] h-shadow-xl items-center flex self-start bg-slate-50	w-[98%] rounded-md gap-x-5 overflow-hidden	border-b border-violet-400	">
          <CheckButton
            status={this.props.task.status}
            onClick={() => this.props.onStatus(this.props.task)}
          />
          <div className="flex flex-col w-[80%]">
            <h1 className="text-2xl text-start">{this.props.title}</h1>
            <p
              className={
                this.props.task.status
                  ? "text-neutral-900	w-[40%] text-sm h-fit w-[37rem] line-through truncate	tracking-wide"
                  : "mr-[7rem] text-neutral-900	w-[100%] text-sm h-fit w-[37rem] truncate	tracking-wide"
              }
            >
              {this.props.description}
            </p>
          </div>
          <span className="font-thin text-lime-700">
            {renderDate(this.props.task.date)}
          </span>
          <span className="flex gap-x-1 ml-auto	invisible opacity-0	">
            <DeleteButton
              onClick={() => this.props.onDelete(this.props.task)}
            />
            <FavoriteButton
              favorite={this.props.task.favorite}
              onClick={() => this.props.onFavorite(this.props.task)}
            />
            <EditButton task={this.props.task} id={this.props.id} />
          </span>
        </div>
      </div>
    );
  }
}

export default Task;
