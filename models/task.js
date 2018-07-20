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
  red: { type: Boolean, required: false, default: 'false'},
  yellow: { type: Boolean, required: false, default: 'false'},
  green: { type: Boolean, required: false, default: 'true'},
  urgency: { type: Number, required: false, default: 1},
  owner: { type: String, required: true },
});

module.exports = mongoose.model('Task', TaskSchema);
