import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function deleteTask(event) {
    const taskToDelete = (event.target.parentElement.children[1].innerText)
    const updatedTaskList = tasks.filter((task) => task.text !== taskToDelete);
    setTasks(updatedTaskList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} deleteTask={deleteTask}  />
    </div>
  );
}

export default App;
