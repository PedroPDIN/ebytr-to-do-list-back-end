module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      task: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      status: {
      allowNull: false,
      type: Sequelize.STRING,

      creationDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'creation_date',
        defaultValue: DataTypes.NOW,
      },

      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Task');
  },
};
