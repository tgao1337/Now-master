const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true },
  estimatedTime: { type: Number, required: false },
  // dueDate: { type: Date, required: false },
  ddm : { type: Number, required: true },
  ddd : { type: Number, required: true },
  ddy : { type: Number, required: true },
  objc: { type: String, required: false },
  badc: { type: String, required: false },
  rewar: { type: String, required: false },
  completed: { type: Boolean, required: false, default: 'false' },
});

module.exports = mongoose.model('Task', TaskSchema);
