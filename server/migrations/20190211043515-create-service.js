
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_service', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      pod_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 't_pod',
          key: 'id',
        },
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      selector: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      version: {
        allowNull: false,
        type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_service'),
};
