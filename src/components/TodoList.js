import React from "react";
import Todo from "./Todo"

const TodoList = ({ todos, setTodos }) => {
    console.log(todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos.map((todo)=>(
                   <Todo 
                   key={todo.id} 
                   text={todo.text}
                   todos={todos}
                   todo={todo}
                   setTodos={setTodos}
                    />
               ))}
            </ul>
        </div>
    );
}

export default TodoList;