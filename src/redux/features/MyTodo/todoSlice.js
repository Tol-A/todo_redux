import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTasks = createAsyncThunk('todos/fetchTasks', async () => {
  const response = await axios.get('http://localhost:8880/todos?_limit=10')
  return response.data
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (todoId) => {
    await axios.delete(`http://localhost:8880/todos/${todoId}`);
    console.log(`удалился id ${todoId}`)
    return todoId
  }
)

export const createTodo = createAsyncThunk('todos/createTodo', async (todoData) => {
    const response = await axios.post('http://localhost:8880/todos', todoData);
    return response.data
  }
)

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todoData) => {
  const response = await axios.put(`http://localhost:8880/todos/${todoData.id}`, todoData)
  return response.data
})

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
    filter: 'all'
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  },
  extraReducers: (buider) => {
    buider
      .addCase(fetchTasks.pending , (state) => {
          state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.todos = action.payload
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message
    });

    buider.addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload)
    });
    buider.addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload)
    });
    buider.addCase( updateTodo.fulfilled, (state, action) => {
        const updatedTodo = action.payload;
        const existingTodo = state.todos.find(todo => todo.id === updatedTodo.id);
        if(existingTodo) {
          existingTodo.title = updatedTodo.title;
          existingTodo.completed = updateTodo.completed;
        }
    })
  }, 
})

export const {setFilter} = todoSlice.actions
export default todoSlice.reducer


