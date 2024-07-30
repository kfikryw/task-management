import React, { useState } from 'react';

function AddTasks({ onAdd }) { // Destructure onAdd from props
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('low');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, description, dueDate, priority, completed: false });
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('low');
    };

    return (
        <section id='add-task'>
            <h2 className='title'>Add New Task</h2>
            <form
            className="add-task-container" 
            onSubmit={onSubmit}>
                <label 
                className='task-title'
                htmlFor='task-title'>Title</label>
                <input 
                className='task-input'
                    type='text'
                    id='task-title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label
                className='job-description'
                 htmlFor='task-description'>Job Description</label>
                <textarea
                className="job-desc-input"
                    id='task-description' // Removed type attribute
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <label>Due Date</label>
                <input type='date'
                id='task-date'
                value={dueDate}
                onChange={(e)=> setDueDate(e.target.value)}
                required
                ></input>
                <label
                className='priority-title' 
                htmlFor='task-priority'>Task Priority</label>
                <select
                className='priority-selection'
                    id='task-priority'
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button className='task-button' 
                type="submit">Add Task</button>
            </form>
        </section>
    );
}

export default AddTasks;
