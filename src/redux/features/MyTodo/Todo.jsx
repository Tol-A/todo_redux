import React, {useState} from 'react'
import {deleteTodo, updateTodo} from './todoSlice'
import {useDispatch} from 'react-redux'
import TodoForm from './TodoForm'

function Todo({todo}) {
    const [isEditable, setIsEditable] = useState(false)
    const dispatch = useDispatch()

    const handleEditableOn = () => {
        setIsEditable(true)
    }

    const handleEditableOff = () => {
        setIsEditable(false)
    }

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id))
    }

    const handleCheckboxClick = () => {
        const todoData = {...todo, completed: !todo.completed}
        dispatch(updateTodo( todoData ))
    }

    
  return isEditable ? (
    <TodoForm todo = {todo} closeEditable={handleEditableOff}/>
    ) : (
    <div>
         <input 
            type='checkbox' 
            checked = {todo.completed}
            onChange={handleCheckboxClick}
        />
        <span onClick={handleEditableOn}>{todo.title}</span>
        <button onClick = {() => handleDeleteTodo(todo.id)}>delete</button>
    </div>
  )
}

export default Todo