import './App.css';
import Frontpage from './js/Frontpage';
import AddTasks from './js/AddTasks'; // Renamed to singular for consistency
import { useState } from 'react';
import Dashboard from './js/Dashboard';
import TaskList from './js/TaskList';
import About from './js/About';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Frontpage />
      </header>
      <main>
        <About/>
        <Dashboard tasks={tasks} />
        <div className='row-container'>
          <TaskList 
            tasks={tasks} 
            onToggleComplete={toggleComplete} 
            onDelete={deleteTask} 
          />
          <AddTasks onAdd={addTask} />
        </div>   
      </main>
      <footer>
        <p>Copyright &#169; 2024 Wan Ahmad Fikry. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
