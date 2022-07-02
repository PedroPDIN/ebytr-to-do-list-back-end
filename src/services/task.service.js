import model from '../database/models/tasks.model'

export const getAllTasks = async () => {
  const tasks = await model.findAll();
  if (tasks.length < 1) return null;
  return tasks;
};

export const insertTask = async ({ task, creation_date, state }) => {
  const { task, creation_date, state } = values;
  if (!task || !creation_date || !state) return null;
  await model.create({ task, creation_date, state });
  return true;
};

export const updateTask = async (id, { task, creation_date, state }) => {
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

export const deleteTask = async (id) => {
  const deletedTask = await model.destroy({ where: { id } });
  return deletedTask;
};
