module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    task: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    state: DataTypes.STRING,
  }, { timestamps: false });

  return Task;
};
