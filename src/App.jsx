import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // load from localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-5 bg-white">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Manage Your Todos
          </h1>

          {/* Todo form */}
          <div className="mb-6">
            <TodoForm />
          </div>

          {/* Todo list */}
          <div className="flex flex-col gap-3">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            ) : (
              <p className="text-center text-gray-500">No todos yet...</p>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
