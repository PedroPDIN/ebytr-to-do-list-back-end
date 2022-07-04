const { Task } = require('../database/models');

const getAllTasks = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

const insertTask = async ({ task, creation_date, status }) => {
  if (!task || !creation_date || !status) return null;
  const newTask = await Task.create({ task, creation_date, status });
  return newTask;
};

const updateTask = async (id, { task, creation_date, status }) => {
  const findTask = await Task.findOne({ where: { id } });
  if (findTask.length < 1) return null;

  const [updatedId] = await Task.update(
    { 
      task, 
      creation_date, 
      status, 
    }, { where: { id } },
  );
  return {
    id: updatedId,
    task,
    creation_date,
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
