import "./TodoForm.css";

function TodoForm(){

    return(

        <div className="todo-form">

            <input
            type="text"
            placeholder="Enter a task..."
            />

            <button>Add</button>

        </div>

    )

}

export default TodoForm;