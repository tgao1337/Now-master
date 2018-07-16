const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true },
<<<<<<< HEAD
  dueDate: { type: Date,required: true },
  completed: { type: Boolean, required: true, default: 'false'},
=======
  dueDate: { type: String, required: true },
>>>>>>> View-Tasks
});

module.exports = mongoose.model('Task', TaskSchema);
