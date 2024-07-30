import React from 'react';

function TaskList({ tasks, onToggleComplete, onDelete }) {
    return (
        <section id='taskList' className='task-list'>
            <h3 className='title task-background task-colour'>Task List</h3>
            <ul className='text_p2'>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                        <p>Due Date: {task.dueDate}</p>
                        <p>Priority: {task.priority}</p>
                        <button 
                        className='mark-button'
                        onClick={() => onToggleComplete(index)}>
                        {task.completed ? 'Mark as Pending' : 'Mark as Complete'}
                        </button>
                        <button 
                        className='delete-button'
                        onClick={() => onDelete(index)}>
                        Delete
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default TaskList;
