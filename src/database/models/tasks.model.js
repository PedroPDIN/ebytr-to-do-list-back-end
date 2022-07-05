module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    task: DataTypes.STRING,
    status: DataTypes.STRING,
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, { timestamps: false });

  return Task;
};
