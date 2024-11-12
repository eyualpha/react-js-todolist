import React from "react";
import TodoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="app">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
