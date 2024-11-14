const express = require("express");
const Project = require("./models/Project");

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
    const projects = await Project.find().populate("tasks");
    res.json(projects);
});

// Create a new project
router.post("/", async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
});

// Update a project
router.put("/:id", async (req, res) => {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProject);
});

// Delete a project
router.delete("/:id", async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
});

module.exports = router;
