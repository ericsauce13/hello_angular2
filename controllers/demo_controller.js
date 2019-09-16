var Task = require('../models/task.js');
// Export functions for our routes.js file to use. This is where the logic of
// your server will go.
module.exports = {
    index: function(req, res){
        res.redirect('/tasks')
    },
    tasks: function(req, res){
        Task.find({})
            .then(tasks => {
                res.json(tasks);
            })
            .catch(err => {
                res.json(err);
            })
    },
    showtask: function(req, res){
        var tasks = Task.find({ _id: req.params.id })
            .then(Task => {
                res.json('/', { Task: Task[0] })
            })
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        let task = new Task();
        console.log("task before assignments is", task)
        task.title = req.body.title;
        task.description = req.body.description;
        console.log("task before save is", task)
        task.save()
            .then(newTask => {
                res.json(newTask)
            })
            .catch(err => res.json(err));
        },
    update: function (req, res) {
        Task.updateOne({ _id: req.params.id }, {
            title: req.body.title,
            description: req.body.description,
        })
             .then(result => {
                    res.json('/tasks/' + result._id)
            })
            .catch(err => res.json(err));
    },
    delete: function(req, res){
        var tasktoremove = Task.findOne({_id: req.params.id})
        tasktoremove.remove()}
}
