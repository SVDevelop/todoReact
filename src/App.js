import React, {useState, useEffect} from 'react';
import TodoItems from './components/TodoItems'
import ButtonContrl from './components/ButtonContrl'
import Input from './components/Input'
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      value: 'dfgdf',
      isDone: false,
      isSelected: true
    },
    {
      id: 2,
      value: 'dfgd sdf sf',
      isDone: true,
      isSelected: false
    }
  ])

  const removeTodo = () => {
    setTodos(todos.filter(todo => !todo.isSelected))
  }
  const handlerNewTodo = e => {
    const value = e.target.value
    if (value !== '') {
      setTodos([
        ...todos,
        {
          id: 1 + Math.max(0, ...todos.map(i=>i.id)),
          value,
          isDone: false,
          isSelected: false
        }
      ])
      setNewTodo('')
    }
  }

  const showBtnContrl = () => {
    return todos.some((todo)=> todo.isSelected)
  }

  function toggleTodo() {
    todos.map(todo => todo.isDone = todo.isSelected || todo.isDone )
    setTodos([...todos])
  }
  function selectedTodo(todoId) {
    const todo = todos.find((todo)=> todo.id === todoId)
    todo.isSelected = !todo.isSelected

    setTodos([...todos])
  }
  // useEffect(()=>{
  //   showBtnContrl()
  // }, [todos])

  return (
    <>
      <h1>todo</h1>
      <Input value={newTodo} newTodo={setNewTodo} handlerNewTodo={handlerNewTodo} />
      {
        todos.some(todo=>todo.isSelected) ? (
        <ButtonContrl remove={removeTodo} todos={todos} done={toggleTodo} />
        ) : ''
      }
      {
        todos.length ? (
          <TodoItems todos={todos} selectedTodo={selectedTodo}/>
        ) : (<p>нет задач</p>)
      }
    </>  
    )
}

export default App;
