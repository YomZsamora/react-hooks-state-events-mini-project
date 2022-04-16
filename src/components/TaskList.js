import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  console.log("MY tasks:");
  console.log({tasks})

  const myTasks = tasks.map((task, index) => (
    <Task task={task} index={index} />
  ))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {myTasks}
    </div>
  );
}

export default TaskList;
