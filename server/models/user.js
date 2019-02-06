
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('t_user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isLowercase: true,
      },
    },
    birthdate: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    language: {
      allowNull: false,
      type: DataTypes.ENUM('en', 'fr'),
    },
    password_hash: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM('admin', 'habitant', 'guest'),
    },
  }, {});
  return user;
};
