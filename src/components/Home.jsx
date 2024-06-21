import React, { useState } from 'react'

const Home = () => {

    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('')

    const [tasks, setTasks] = useState([]);

    const handleAddTask = (e) => {
        e.preventDefault();
        if(!taskDescription.trim()){
            alert('Task description is required');
            return;
        }
        const newTask = {
            id: Date.now(),
            description: taskDescription,
            dueDate,
            priority,
            completed : false
        };

        setTasks([...tasks, newTask]);

        console.log(newTask);
        
        setTaskDescription('');
        setDueDate('');
        setPriority('');
    }

    const handleToggleComplete = (taskId) => {
        const updatedTasks = tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed} : task);
        setTasks(updatedTasks);
    }

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    }


return (
    <div className='min-h-screen flex flex-col'>
        <div className='bg-white shadow-md rounded-lg p-6 mt-10 mb-40 ml-10 w-full max-w-md'>
            <h1 className='text-2xl font-bold'>TaskTide - a todo app</h1>
        </div>
        <div className=''>
            <div>
                <form onSubmit={handleAddTask}>
                    <input 
                        type="text"
                        placeholder='Add your todo here!'
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    />
                    <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="">Select Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <button type='submit'>
                        Add Todo
                    </button>
                </form>
            </div>
            <div>
                {tasks.map(task => (
                    <div key={task.id} className=''>
                        <input type="checkbox" checked={task.completed} onChange={()=>{handleToggleComplete(task.id)}} />
                        <span style={{textDecoration : task.completed ? 'line-through' : 'none'}}>
                            {task.description}
                        </span>
                        {task.dueDate && <span> - Due: {task.dueDate}</span>}
                        {task.priority && <span> - Priority: {task.priority}</span>}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
        <div className=''>
            <h4>Made by Vaishnavi Kadam - 2024</h4>
        </div>
    </div>
)}

export default Home