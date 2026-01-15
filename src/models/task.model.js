const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Task name is required'], trim: true, maxlength: [50, 'Task name cannot be more than 50 characters'] },
    completed: { type: Boolean, default: false }
});
module.exports = mongoose.model('Task', taskSchema);