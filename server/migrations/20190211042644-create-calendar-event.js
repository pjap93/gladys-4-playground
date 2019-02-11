
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_calendar_event', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      calendar_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 't_calendar',
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
      location: {
        type: Sequelize.STRING,
      },
      start: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      end: {
        type: Sequelize.DATE,
      },
      full_day: {
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
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_calendar_event'),
};