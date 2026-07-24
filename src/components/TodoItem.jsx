import "./TodoItem.css";

function TodoItem(){

    return(

        <div className="todo-item">

            <div className="left">

                <input type="checkbox"/>

                <span>Learn React</span>

            </div>

            <div className="buttons">

                <button>✏️</button>

                <button>🗑️</button>

            </div>

        </div>

    )

}

export default TodoItem;