import React from "react";
import Task from "./Task";

function TaskList() {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <Task />
    </div>
  );
}

export default TaskList;
