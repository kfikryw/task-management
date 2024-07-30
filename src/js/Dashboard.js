import React from 'react';

function Dashboard({ tasks }) {
    const totalTask = tasks.length;
    const completeTask = tasks.filter(task => task.completed).length;
    const pendingTask = tasks.filter(task => !task.completed).length;

    return (
        <section id="Dashboard">
            <h2>Your Tasks</h2>
            <div className="task-overview">
                <div className="task-summary">
                    <h3>Total Tasks</h3>
                    <p className='section_text_p1'>{totalTask}</p>
                </div>
                <div className="task-summary">
                    <h3>Completed Tasks</h3>
                    <p className='section_text_p1'>{completeTask}</p>
                </div>
                <div className="task-summary">
                    <h3>Pending Tasks</h3>
                    <p className='section_text_p1'>{pendingTask}</p>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
