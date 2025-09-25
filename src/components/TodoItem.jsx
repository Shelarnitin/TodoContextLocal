import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg shadow-md transition ${
        todo.completed ? "bg-green-100" : "bg-purple-100"
      }`}
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`w-full bg-transparent outline-none rounded-lg px-1 ${
            isTodoEditable ? "border border-gray-400" : "border-transparent"
          }`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>

      <div className="flex gap-2 ml-2">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "💾" : "✏️"}
        </button>
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
