import { useContext } from "react";
//CONTEXT
import TodoContext from "../context/TodoContext";

const TodoItems = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <div id="todo-items">
      {todos.map((todo, i) => (
        <div id="todoos" key={i}>
          <span>{todo.text}</span>
          <button id="remove-button" onClick={() => removeTodo(todo.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
