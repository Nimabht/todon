import { Component } from "react";
import Task from "./common/task";
import "../App.css";
class TaskTable extends Component {
  state = {};
  render() {
    return (
      <div className="scroll flex flex-col gap-y-1 overflow-auto h-full w-[96%] mt-5 ml-9">
        {this.props.tasks.map((task) => (
          <Task
            id={this.props.id}
            onPopup={() => this.props.onPopup(task)}
            task={task}
            key={task.title}
            title={task.title}
            description={task.description}
            onStatus={this.props.onStatus}
            onDelete={this.props.onDelete}
            onFavorite={this.props.onFavorite}
          />
        ))}
      </div>
    );
  }
}

export default TaskTable;
