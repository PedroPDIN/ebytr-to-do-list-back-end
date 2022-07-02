const { 
  getAllTasks,
  insertTask,
  updateTask,
  removeTask,
} = require('./task.service');

const SERVICES = {
  getAllTasks,
  insertTask,
  updateTask,
  removeTask,
};

module.exports = SERVICES;
