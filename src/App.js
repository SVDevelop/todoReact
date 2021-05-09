import React, { useState, useCallback, useMemo } from "react";
import { ButtonContrl, Input, TodoList } from "./components";
import "./App.css";

export default function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const removeTodo = useCallback(
    () => setTodos((todos) => todos.filter((todo) => !todo.isSelected)),
    []
  );

  const handlerNewTodo = useCallback((value) => {
    if (!value) {
      return;
    }

    setTodos((todos) => [
      ...todos,
      {
        id: 1 + Math.max(0, ...todos.map((i) => i.id)),
        value: value.trim(),
        isDone: false,
        isSelected: false
      }
    ]);

    setNewTodo("");
  }, []);

  const toggleTodo = useCallback(() => {
    setTodos((todos) =>
      todos.map((todo) => {
        todo.isDone = todo.isSelected || todo.isDone;
        todo.isSelected = false;
        return todo;
      })
    );
  }, []);

  const selectedTodo = useCallback((todoId) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isSelected: !todo.isSelected
          };
        }

        return todo;
      })
    );
  }, []);

  const show = useMemo(() => todos.some((todo) => todo.isSelected), [todos]);

  return (
    <>
      <h1>{newTodo || "todo"}</h1>

      <Input
        initValue={newTodo}
        onChange={setNewTodo}
        onEnter={handlerNewTodo}
      />

      <TodoList todos={todos} onSelect={selectedTodo}>
        <p>нет задач</p>
      </TodoList>

      <ButtonContrl
        show={show}
        todos={todos}
        onRemove={removeTodo}
        onDone={toggleTodo}
      />
    </>
  );
}
