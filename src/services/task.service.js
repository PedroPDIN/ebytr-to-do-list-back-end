const model = require('../database/models/tasks.model');

const getAllTasks = async () => {
  const tasks = await model.findAll();
  if (tasks.length < 1) return null;
  return tasks;
};

const insertTask = async ({ task, creation_date, state }) => {
  if (!task || !creation_date || !state) return null;
  await model.create({ task, creation_date, state });
  return true;
};

const updateTask = async (id, { task, creation_date, state }) => {
  const findTask = await model.findOne({ where: { id } });
  if (findTask.length < 1) return null;

  const [updated] = await model.update(
    { 
      task, 
      creation_date, 
      state, 
    }, { where: { id } },
  );
  return updated;
};

const deleteTask = async (id) => {
  const deletedTask = await model.destroy({ where: { id } });
  return deletedTask;
};

module.exports = {
  getAllTasks,
  insertTask,
  updateTask,
  deleteTask,
};
