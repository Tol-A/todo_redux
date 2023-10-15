import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo, updateTodo } from './todoSlice'
import { nanoid } from 'nanoid'


function TodoForm({ todo = null, closeEditable = null  }) {
    
    const [title, setTitle] = useState(todo ? todo.title : '')
    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(todo) {
            dispatch(updateTodo({...todo, title}))
            closeEditable()
        } else {
            const todoData =  {id: nanoid(), title, completed:false}
            dispatch(createTodo( todoData ))
        }   
        setTitle('')
    }


  return (
    <form onSubmit={handleAddTodo} >
        <input
            type='text'
            className='todo-input edit' 
            value = {title}
            onChange={e => setTitle(e.target.value)}
        />
        <button 
            className='todo-button edit'
            type='submit' >{todo ? 'Сохранить' : 'Добавить'}
        </button>
    </form>
  )
}

export default TodoForm