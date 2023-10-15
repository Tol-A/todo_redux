import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, setFilter } from './todoSlice';
import Todo from './Todo';


function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => {
    const filter = state.todos.filter;
    const todos = state.todos.todos;
    
      if (filter === 'completed') {
        return todos.filter(todo => todo.completed);
      } else if (filter === 'uncompleted') {
        return todos.filter(todo => !todo.completed)
      } else {
        return todos
      }
  })
   
    const todosLengtch = todos.length;
    const handleFilter = (filter) => {
      dispatch(setFilter(filter))
    }

    useEffect(() => {
      dispatch(fetchTasks())
    }, [])


  return (
   <div>
    <h1>Количество дел: {todosLengtch} </h1>
    <div>
      <button className='todo-button' onClick={() => handleFilter('all')}>все задачи</button>
      <button className='todo-button' onClick={() => handleFilter('completed')}>выполненые задачи</button>
      <button className='todo-button' onClick={() => handleFilter('uncompleted')}>невыполненые задачи</button>
    </div>
      {todos.map(todo => 
        <Todo key = {todo.id} todo = {todo}  />
      )}
   </div>
  )
}

export default TodoList