const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true },
  estimatedTime: { type: Number, required: true },
  dueDate: { type: Date, required: false },
  objc: { type: String, required: true },
  badc: { type: String, required: true },
  rewar: { type: String, required: true },
  completed: { type: Boolean, required: false, default: 'false' },
});

module.exports = mongoose.model('Task', TaskSchema);
