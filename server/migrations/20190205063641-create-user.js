module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('t_user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    firstname: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    lastname: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    birthdate: {
      allowNull: false,
      type: Sequelize.DATEONLY,
    },
    language: {
      allowNull: false,
      type: Sequelize.ENUM('en', 'fr'),
    },
    password_hash: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    role: {
      allowNull: false,
      type: Sequelize.ENUM('admin', 'habitant', 'guest'),
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_user'),
};
