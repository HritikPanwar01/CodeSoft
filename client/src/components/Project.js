import React, { useEffect, useState } from "react";
import axios from "axios";

function Project({ projectId }) {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get(`http://localhost:5000/api/tasks/${projectId}`);
        setTasks(response.data);
    };

    const addTask = async () => {
        const newTask = { name: taskName, project: projectId };
        await axios.post("http://localhost:5000/api/tasks", newTask);
        setTaskName("");
        fetchTasks();
    };

    return (
        <div>
            <h2>Tasks</h2>
            <input
                type="text"
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Project;
