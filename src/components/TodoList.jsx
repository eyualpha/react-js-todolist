import React from "react";

const TodoList = () => {
  let todos = [
    "Learn React",
    "Learn Node",
    "Learn Express",
    "Learn MongoDB",
    "Learn Redux",
  ];
  return (
    <div>
      <ol>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <i class="fa-solid fa-pen-to-square">
                <i class="fa-solid fa-trash"></i>
              </i>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
