import { Component } from "react";
import Task from "./common/task";
class TaskTable extends Component {
  state = {};
  render() {
    return (
      <div className="overflow-auto h-full w-[96%]">
        {this.props.tasks.map((task) => (
          <Task
            task={task}
            key={task.title}
            title={task.title}
            description={task.description}
            onStatus={this.props.onStatus}
          />
        ))}
      </div>
    );
  }
}

export default TaskTable;
