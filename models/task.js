const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true },
  dueDate: { type: Date,required: true },
  completed: { type: Boolean, required: true, default: 'false'},
});

module.exports = mongoose.model('Task', TaskSchema);
