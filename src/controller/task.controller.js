const SERVICES = require('../services');

const getAllTasks = async (_req, res) => {
  try {
    const tasks = await SERVICES.getAllTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: 'server error' });
  };
};

const insertTask = async (req, res) => {
  const { body } = req;

  try {
    const task = await SERVICES.insertTask(body);
    if (!task) return res.status(400).json({ message: 'Bad Request' });
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ message: 'server error' });
  };
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const task = await SERVICES.updateTask(id, body);
    if (!task) return res.status(400).json({ message: 'Task not found' });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: 'server error' });
  };
};

const removeTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await SERVICES.removeTask(id);
    if (!deletedTask) return res.status(404).json({ message: 'task not found' });
    return res.status(200).json({ message: 'task removed' });
  } catch (error) {
    return res.status(500).json({ message: 'server error' });
  };
};

module.exports = {
  getAllTasks,
  insertTask,
  updateTask,
  removeTask,
};
