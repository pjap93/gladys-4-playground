
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_variable', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      service_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 't_service',
          key: 'id',
        },
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      value: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_variable'),
};