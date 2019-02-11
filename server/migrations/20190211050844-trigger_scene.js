
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_trigger_scene', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      trigger_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 't_trigger',
          key: 'id',
        },
      },
      scene_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 't_scene',
          key: 'id',
        },
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_trigger_scene'),
};
