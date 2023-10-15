import React, {useState} from 'react'
import {deleteTodo, updateTodo} from './todoSlice'
import {useDispatch} from 'react-redux'
import TodoForm from './TodoForm'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'


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
    <div className='todo-row'>
         <input 
            type='checkbox' 
            checked = {todo.completed}
            onChange={handleCheckboxClick}
        />
        <span onClick={handleEditableOn} >
            <b>{todo.title}</b>
        </span>
        <div className='elem-icon'>
            <BsFillPencilFill 
                    className = 'edit-icon'
                    onClick={handleEditableOn}
                /> {' '}
            <AiOutlineDelete 
                onClick = {() => handleDeleteTodo(todo.id)}
                className = 'delete-icon'
            />
        </div>
        
    </div>
  )
}

export default Todo