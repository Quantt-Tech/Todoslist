import "./App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <div className="todo-container">
        <Header />
        <TodoForm />
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>
    Increase
</button>
        <TodoList />
      </div>
    </div>
  );
}

export default App;