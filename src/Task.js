    import React from 'react'
    import {useState} from 'react'

    const Task = ({ task, onEditTask }) => {
        const [isEditing, setIsEditing] = useState(false);
        const [editedDescription, setEditedDescription] = useState(task.description);
    
        const handleEdit = () => {
        onEditTask(task.id, editedDescription);
        setIsEditing(false);
        };
    
        return (
        <li>
            {isEditing ? (
            <div>
                <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                />
                <button onClick={handleEdit}>Save</button>
            </div>
            ) : (
            <div>
                <span>{task.description}</span>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => onEditTask(task.id, null, !task.isDone)}
                />
            </div>
            )}
        </li>
        );
    };

    export default Task;