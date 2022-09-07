import './App.css';
import { Todo } from './Todo';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <h1>What are your plans for today?</h1>
      </div>
      <Todo />
    </div>
  );
}

export default App;
