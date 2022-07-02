const Task = (sequelize, DataTypes) => {
  const task = sequelize.define('Task', {
    id: DataTypes.INTEGER,
    task: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    state: DataTypes.STRING,
  }, { timestamps: false });

  return task;
};

export default Task;
