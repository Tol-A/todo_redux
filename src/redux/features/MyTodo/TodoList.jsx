import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, setFilter } from './todoSlice';
import Todo from './Todo';

function TodoList() {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

// выдает ошибку 
  // const todos = useSelector(state => {
  //   const filter = state.todos.filter;
  //   const todos = state.todo.todos;
    
  //     if (filter === 'completed') {
  //       return todos.filter(todo => todo.completed);
  //     } else if (filter === 'uncomplited') {
  //       return todos.filter(todo => !todo.completed)
  //     } else {
  //       return todos
  //     }
  // })

    const handleFilter = (filter) => {
        dispatch(setFilter(filter))
    }

    const todosLengtch = todos.length;

  return (
   <>
    <h1>Todo: {todosLengtch} </h1>
    <div>
      <button onClick={handleFilter('all')}>все задачи</button>
      <button onClick={handleFilter('completed')}>выполненые задачи</button>
      <button onClick={handleFilter('uncompleted')}>невыполненые задачи</button>
    </div>
     <div>
      {todos.map(todo => 
        <Todo key = {todo.id} todo = {todo}/>
      )}
    </div>
   </>
  )
}

export default TodoList