module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    task: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, { timestamps: false });

  return Task;
};
