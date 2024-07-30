import React from 'react';

function Frontpage() {
    return (
        <div>
            <div className="upper-container">
                <h2 className="myName">Fikry Effendy</h2>
                <nav className="nav-container">
                    <a className="nav-menu" href="#About">About</a>
                    <a className="nav-menu" href="#Dashboard">Dashboard</a>
                    <a className='nav-menu' href='#add-task'>Add Task</a>
                    <a className='nav-menu' href='#taskList'>Task List</a>
                </nav>
            </div>
        </div>
    );
}

export default Frontpage;
