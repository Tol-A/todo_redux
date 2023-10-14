import './App.css';
import TodoForm from './redux/features/MyTodo/TodoForm';
import TodoList from './redux/features/MyTodo/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
        <TodoForm/>
        <TodoList/>
    </div>
  );
}

export default App;
