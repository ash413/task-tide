import React, { useState } from 'react';

const Home = () => {
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!taskDescription.trim()) {
            alert('Task description is required');
        return;
    }
    const newTask = {
        id: Date.now(),
        description: taskDescription,
        dueDate,
        priority,
        completed: false,
    };

    setTasks([...tasks, newTask]);

    console.log(newTask);

    setTaskDescription('');
    setDueDate('');
    setPriority('');
};

    const handleToggleComplete = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-blue-400">
        <div className="bg-white shadow-md rounded-lg p-6 mt-10 mb-10 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center">TaskTide - a todo app</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-10 w-full max-w-md">
            <div>
                <form onSubmit={handleAddTask} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Add your todo here!"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="p-2 border rounded-md"
                    />
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="p-2 border rounded-md"
                    />
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="p-2 border rounded-md"
                    >
                        <option value="">Select Priority</option>
                        <option value="HIGH">High</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="LOW">Low</option>
                    </select>
                    <button type="submit" className="p-2 bg-gray-400 text-white rounded-md hover:bg-gray-600">
                        Add Todo
                    </button>
                </form>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                {tasks.map((task) => (
                    <div key={task.id} className="grid grid-cols-3 gap-4 items-center p-2 border-b last:border-b-0">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleComplete(task.id)}
                                className="h-4 w-4"
                            />
                            <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
                            {task.description}
                            </span>
                        </div>
                        <div className="text-sm text-gray-500">
                            {task.dueDate && <span>Due: {task.dueDate}</span>}
                        </div>
                        <div className="flex items-center justify-end space-x-2">
                            {task.priority && (
                                <span className={`text-sm ${task.priority === 'HIGH'? 'text-red-500': task.priority === 'MEDIUM'? 'text-yellow-500': 'text-green-500'}`}>
                                {task.priority}
                                </span>
                            )}
                            <button onClick={() => handleDeleteTask(task.id)} className="p-1 text-red-500 hover:text-red-700">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="text-center mt-10 mb-4">
            <h4>Made by Vaishnavi Kadam - 2024</h4>
        </div>
    </div>
);
};

export default Home;
