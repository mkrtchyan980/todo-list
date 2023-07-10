import { useReducer, useState } from "react";
import "../src/index.css";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import TodoFooter from "./component/TodoFooter";

function reduce(state, action) {
    if (action.type === "add") {
        return [
            ...state,
            {
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false,
            },
        ];
    } else if (action.type === "delete") {
        return state.filter((todo) => todo.id !== action.payload.id);
    } else if (action.type === "onchange") {
        return state.map((todo) => {
            if (action.payload.newTodo.id === todo.id) {
                return action.payload.newTodo;
            }
            return todo;
        });
    } else if (action.type === "clearCompleted") {
        return state.filter((t) => !t.isCompleted);
    }
}

function App() {
    const [todos, dispatch] = useReducer(reduce, [
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
                    dispatch({
                        type: "add",
                        payload: {
                            text: text,
                        },
                    });
                }}
            />
            <TodoList
                todos={todos}
                onDelate={(todo) => {
                    dispatch({
                        type: "delete",
                        payload: {
                            id: todo.id,
                        },
                    });
                }}
                onChange={(newTodo) => {
                    dispatch({
                        type: "onchange",
                        payload: {
                            newTodo: newTodo,
                        },
                    });
                }}
            />
            <TodoFooter
                todos={todos}
                onClearCompleted={(todo) => {
                    dispatch({
                        type: "clearCompleted",
                        payload: {
                            todo: todo,
                        },
                    });
                }}
            />
        </div>
    );
}

export default App;
