# View Project
Link: --> https://todocontextlocal-production.up.railway.app/

📝 React Todo App (Card Style)

A simple React Todo App built with Context API and Tailwind CSS, featuring add, edit, delete, and complete functionalities — all displayed in a card-style UI.

🚀 Features

➕ Add new todos

✏️ Edit todos (💾 Save when done)

❌ Delete todos

✅ Mark todos as completed (with green background)

💾 LocalStorage support (todos persist after refresh)

🎨 Modern card-style UI with Tailwind CSS

📂 Project Structure
src/
│── components/
│   ├── TodoForm.jsx      # Input form for adding todos
│   ├── TodoItem.jsx      # Single todo item with edit/delete buttons
│   └── index.js          # Component exports
│
│── contexts/
│   ├── TodoContext.js    # Context logic for todos
│   └── index.js          # Context export
│
│── App.jsx               # Main app logic with TodoProvider
│── main.jsx              # React entry point
│── index.css             # Tailwind styles

⚡ Tech Stack

React (with Hooks)

Context API (global state management)

Tailwind CSS (styling)

LocalStorage (data persistence)

🛠 Setup Instructions

Clone the repo

git clone https://github.com/your-username/todo-card-style.git
cd todo-card-style


Install dependencies

npm install


Run the development server

npm run dev


Open in your browser:

http://localhost:5173




🔑 Key Files

components/TodoForm.jsx

Handles new todo input & submission

Styled with Tailwind

Adds todos using addTodo from context

components/TodoItem.jsx

Displays individual todo

Edit (✏️ → 💾) and delete (❌) actions

Checkbox to toggle completion

contexts/TodoContext.js

Provides todos state and actions: addTodo, updateTodo, deleteTodo, toggleComplete

App.jsx

Wraps everything inside TodoProvider

Renders TodoForm and list of TodoItems

📌 Future Improvements

✨ Add categories/tags for todos

📅 Add due dates

🌙 Add dark/light theme toggle

📲 Make it PWA for offline usage

📜 License

This project is open-source and available under the MIT License.