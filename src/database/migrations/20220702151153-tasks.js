module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoInclement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      task: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      creationDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'creation_date',
      },

      state: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  },
};
