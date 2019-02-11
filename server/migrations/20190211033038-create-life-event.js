
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_life_event', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 't_user',
          key: 'id',
        },
      },
      house_id: {
        type: Sequelize.UUID,
        references: {
          model: 't_house',
          key: 'id',
        },
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      data: {
        type: Sequelize.JSON,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_life_event'),
};
