const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    deadline: Date,
    status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
});

module.exports = mongoose.model("Task", TaskSchema);
