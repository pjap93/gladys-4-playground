
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_session', {
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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      refresh_token_hash: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      valid_until: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      last_seen: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      revoked: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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

    await queryInterface.addIndex('t_session', ['user_id']);
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_session'),
};
