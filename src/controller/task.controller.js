import services from '../services';

export const getAllTasks = async (_req, res) => {
  try {
    const tasks = await services.getAllTasks();
    if (!tasks) return res.status(404).json({ message: 'task not found' });
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  };
};

export const insertTask = async (req, res) => {
  const { body } = req;

  try {
    const task = await services.insertTask(body);
    if (!task) return res.status(400).json({ message: 'Bad Request' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  };
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const task = await services.updateTask(id, body);
    if (!task) return res.status(400).json({ message: 'Task not found' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  };
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await services.deletedTask(id);
    if (!deletedTask) return res.status(404).json({ message: 'task not found' });
    return res.status(200).json({ message: 'task removed' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  };
};
