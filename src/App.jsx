import "./App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Playground from "./components/Playground";

function App() {
  return (
    <div className="app">
      <div className="todo-container">

        <Header />
        <Playground />

        <TodoForm />

        <TodoList />

      </div>
    </div>
  );
}

export default App;