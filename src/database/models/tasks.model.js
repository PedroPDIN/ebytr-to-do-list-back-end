module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: DataTypes.INTEGER,
    task: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, { timestamps: false });

  return Task;
};
