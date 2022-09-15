import { useState } from "react";
import "./styles.css";
import { todos } from "./todos";

export default function App() {
  const [todoData, setTodoData] = useState(todos);

  const completedTodosHandler = () => {
    const display = todos.filter((todo) => todo.completed);
    setTodoData(display);
  };

  const incompleteTodosHandler = () => {
    const display = todos.filter((todo) => !todo.completed);
    setTodoData(display);
  };

  const allTodosHandler = () => {
    setTodoData(todos);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <button onClick={completedTodosHandler}>Show Completed Todos</button>
      <button onClick={incompleteTodosHandler}>Show Incomplete Todos</button>
      <button onClick={allTodosHandler}>Show All</button>
      <ul>
        {todoData.map((e) => (
          <div
            key={e.id}
            style={{ border: "solid", margin: "1rem", width: "20rem" }}
          >
            <p>{e.title}</p>
            <p>Completed: {e.completed ? "Yes" : "No"}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
