import React, {useState} from  'react'

const AddTask =({onAddTask}) =>{
    const [taskDescription, setTaskDescription] = useState("");
  
    const handleAddTask = () => {
      if (taskDescription.trim() !== "") {
        onAddTask({
          id: Date.now(), // You can use a better ID generation method
          description: taskDescription,
          isDone: false,
        });
        setTaskDescription("");
      }
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  };

  export default  AddTask