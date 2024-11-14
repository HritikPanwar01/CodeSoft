import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [projectName, setProjectName] = useState("");

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
    };

    const addProject = async () => {
        const newProject = { name: projectName, description: "" };
        await axios.post("http://localhost:5000/api/projects", newProject);
        setProjectName("");
        fetchProjects();
    };

    return (
        <div>
            <h1>Project Management Tool</h1>
            <input
                type="text"
                placeholder="Project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <button onClick={addProject}>Add Project</button>
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
