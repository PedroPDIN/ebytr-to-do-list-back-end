const { 
  getAllTasks,
  insertTask,
  updateTask,
  deletedTask,
} = require('./task.service');

const SERVICES = {
  getAllTasks,
  insertTask,
  updateTask,
  deletedTask,
};

module.exports = SERVICES;
