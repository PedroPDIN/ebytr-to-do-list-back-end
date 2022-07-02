const {
  getAllTasks,
  insertTask,
  updateTask,
  deleteTask,
} = require('./task.controller');

const CONTROLLERS = {
  getAllTasks,
  insertTask,
  updateTask,
  deleteTask,
};

module.exports = CONTROLLERS;
