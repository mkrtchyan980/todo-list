import { useState } from "react";
import "../src/index.css";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import TodoFooter from "./component/TodoFooter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "React",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "JavaScript",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Html",
      isCompleted: false,
    },
  ]);
  return (
    <div className="child">
      <TodoForm
        onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
            },
          ]);
        }}
      />
      <TodoList
        todos={todos}
        onDelate={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        onChange={(newTodo) => {
          setTodos(
            todos.map((todo) => {
              if (newTodo.id === todo.id) {
                return newTodo;
              }
              return todo;
            })
          );
        }}
      />
      <TodoFooter
        todos={todos}
        onClearCompleted={() => {
          setTodos(todos.filter((t) => !t.isCompleted));
        }}
      />
    </div>
  );
}

export default App;
