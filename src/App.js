import React, {useState} from 'react'
import AddTask from './AddTask';
import ListTask from './ListTask';



function App() {
  const [tasks, setTasks] = useState([]);
  const [showDoneTasks, setShowDoneTasks] = useState(null); // Filter state

  
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  
  const filterTasks = (isDone) => {
    setShowDoneTasks(isDone);
  };

  
  const editTask = (taskId, newDescription, isDone) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        if (newDescription !== null) {
          task.description = newDescription;
        }
        if (isDone !== null) {
          task.isDone = isDone;
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask onAddTask={addTask} />
      <ListTask tasks={tasks} onFilter={filterTasks} onEditTask={editTask} />
    </div>
  );
}

export default App;