const route = require('express');
const CONTROLLERS = require('../controller');

const routeTask = route.Router();

routeTask.get('/', CONTROLLERS.getAllTasks);
routeTask.post('/', CONTROLLERS.insertTask);
routeTask.put('/:id', CONTROLLERS.updateTask);
routeTask.delete('/:id', CONTROLLERS.deleteTask);

module.exports = routeTask;
