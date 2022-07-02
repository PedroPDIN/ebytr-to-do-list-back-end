const { Task } = require('../database/models');

const getAllTasks = async () => {
  const tasks = await Task.findAll();
  if (tasks.length < 1) return null;
  return tasks;
};

const insertTask = async ({ task, creation_date, state }) => {
  if (!task || !creation_date || !state) return null;
  const newTask = await Task.create({ task, creation_date, state });
  return newTask;
};

const updateTask = async (id, { task, creation_date, state }) => {
  const findTask = await Task.findOne({ where: { id } });
  if (findTask.length < 1) return null;

  const [updatedId] = await Task.update(
    { 
      task, 
      creation_date, 
      state, 
    }, { where: { id } },
  );
  return {
    id: updatedId,
    task,
    creation_date,
    state,
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
