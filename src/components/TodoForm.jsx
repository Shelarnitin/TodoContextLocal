import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex shadow-md rounded-lg overflow-hidden"
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full px-3 py-2 outline-none bg-gray-100 text-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-5 py-2 hover:bg-green-700 transition"
      >
        ➕
      </button>
    </form>
  );
}

export default TodoForm;
