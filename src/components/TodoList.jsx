import React from "react";

const TodoList = () => {
  const [todos, setTodos] = React.useState([
    "Learn React",
    "Learn Node",
    "Learn Express",
    "Learn MongoDB",
    "Learn Redux",
  ]);

  function addTodo() {
    setTodos([...todos, "Learn React"]);
  }
  return (
    <div>
      <div className="input-section">
        <input
          onChange={setValue(value)}
          value={txt}
          type="text"
          placeholder="Enter a todo..."
        />
        <button onClick={() => addTodo()}>Add Todo</button>
      </div>

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
