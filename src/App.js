import './App.css';
import TodoForm from './redux/features/MyTodo/TodoForm';
import TodoList from './redux/features/MyTodo/TodoList';

function App() {
  return (
    <div className="App">
        <TodoForm/>
        <TodoList/>
    </div>
  );
}

export default App;
