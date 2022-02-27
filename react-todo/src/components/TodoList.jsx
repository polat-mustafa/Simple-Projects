//COMPONENT
import TodoItems from "./TodoItems";
//İMPORT HOOKS
import { useContext, useEffect } from "react";
//CONTEXT
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { handleChange, inputText, handleSubmit, setTodos } =
    useContext(TodoContext);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    setTodos(todos);
  }, [ setTodos ]);

  return (
    <div id="TodoList">
      <div className="items1">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="inputText"
            value={inputText}
            onChange={handleChange}
            placeholder="Add Todo"
          />
          <button id="add-button" type="submit">
            Add
          </button>
        </form>
      </div>

      <TodoItems />
    </div>
  );
};

export default TodoList;
