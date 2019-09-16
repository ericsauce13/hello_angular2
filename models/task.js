var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    }
}, {timestamps: true });

var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;