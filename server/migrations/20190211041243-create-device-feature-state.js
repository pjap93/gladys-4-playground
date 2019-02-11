
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_device_feature_state', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      device_feature_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 't_device_feature',
          key: 'id',
        },
      },
      value: {
        allowNull: false,
        type: Sequelize.DOUBLE,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_device_feature_state'),
};