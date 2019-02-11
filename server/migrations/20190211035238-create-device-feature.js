
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_device_feature', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      device_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 't_device',
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
      external_id: {
        unique: true,
        type: Sequelize.STRING,
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      read_only: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      unit: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      min: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      max: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      last_value: {
        type: Sequelize.DOUBLE,
      },
      last_value_changed: {
        type: Sequelize.DATE,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_device_feature'),
};
