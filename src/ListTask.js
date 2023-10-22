import React from 'react'
import Task from './Task'


const ListTask = ({ tasks, onFilter, onEditTask }) => {
    return (
      <div>
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onEditTask={onEditTask} />
          ))}
        </ul>
      </div>
    );
  };

  export default ListTask
