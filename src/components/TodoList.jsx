import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "go to work",
    "do laundry",
  ]);
  const [newTask, setNewTask] = useState("");

  function addTask(index) {}

  function deleteTask(index) {}

  function handleInputChange(event) {
    setNewTask(event.target.value);
    console.log(event.target.value);
  }

  function moveTaskUp(index) {}
  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="enter your task..."
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>{" "}
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-up-btn" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button
              className="move-down-btn"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
