const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    deadline: Date,
    status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

module.exports = mongoose.model("Project", ProjectSchema);
