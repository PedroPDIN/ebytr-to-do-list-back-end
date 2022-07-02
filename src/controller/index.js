const {
  getAllTasks,
  insertTask,
  updateTask,
  removeTask,
} = require('./task.controller');

const CONTROLLERS = {
  getAllTasks,
  insertTask,
  updateTask,
  removeTask,
};

module.exports = CONTROLLERS;
