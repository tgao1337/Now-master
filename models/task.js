const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true },
  dueDate: { tpye: Date,required: true },
  completed: { tpye: Boolean, required: true},
});

module.exports = mongoose.model('Task', TaskSchema);
