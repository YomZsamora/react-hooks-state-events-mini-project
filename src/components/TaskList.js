import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {

  const myTasks = tasks.map((task, index) => (
    <Task task={task} key={index} deleteTask={deleteTask} />
  ))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {myTasks}
    </div>
  );
}

export default TaskList;
