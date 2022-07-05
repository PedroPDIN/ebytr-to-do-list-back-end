const { Task } = require('../database/models');

const getAllTasks = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

const insertTask = async ({ task, status }) => {
  if (!task || !status) return null;
  const newTask = await Task.create({ task, status });
  return newTask;
};

const updateTask = async (id, { task, status }) => {
  const findTask = await Task.findOne({ where: { id } });
  if (findTask.length < 1) return null;

  const [updatedId] = await Task.update({
    task,
    status,
  }, { where: { id } });

  return {
    id: updatedId,
    task,
    status,
    success: true,
  };
};

const removeTask = async (id) => {
  const deletedTask = await Task.destroy({ where: { id } });
  return deletedTask;
};

module.exports = {
  getAllTasks,
  insertTask,
  updateTask,
  removeTask,
};
