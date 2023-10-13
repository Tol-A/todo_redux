import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/MyTodo/todoSlice'

export default configureStore({
  reducer: {
    todos: todoReducer
  }
})