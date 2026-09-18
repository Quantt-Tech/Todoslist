import "./TodoForm.css";
import { useState } from "react";

function TodoForm(){
const [task, setTask] = useState("");
    return(

        <div className="todo-form">

            <input
    type="text"
    placeholder="Enter a task..."
    value={task}
    onChange={(e) => setTask(e.target.value)}
/>

<p>{task}</p>

<button>Add</button>

        </div>

    )

}

export default TodoForm;