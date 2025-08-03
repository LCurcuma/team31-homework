"use client";

import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { useState } from "react";

const addTodo = "add";
const removeTodo = "remove";
const toggleTodo = "toggle";

const add = (text) => ({ type: addTodo, payload: text });
const remove = (id) => ({ type: removeTodo, payload: id });
const toggle = (id) => ({ type: toggleTodo, payload: id });

function todoReducer(state, action) {
  switch (action.type) {
    case addTodo:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case removeTodo:
      return state.filter((todo) => todo.id !== action.payload);
    case toggleTodo:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

function TodoList() {
  const { state, dispatch } = useTodos();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(add(input));
      setInput("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <span
              onClick={() => dispatch(toggle(todo.id))}
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(remove(todo.id))}
              style={{ marginLeft: 8 }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}
