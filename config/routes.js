// Lets import our controller. views.py in Django, *_controller.rb in Ruby
// This demo controller exports functions for us to use.
var our_controller = require('../controllers/demo_controller.js');

module.exports = function (app) {
    app.get('/', our_controller.index);
    app.get('/tasks', our_controller.tasks);
    app.get('/tasks/:id', our_controller.showtask);
    app.post('/tasks', our_controller.create);
    app.put('/tasks/:id', our_controller.update);
    app.delete('/tasks/:id', our_controller.delete);
}


