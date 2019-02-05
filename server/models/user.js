module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('t_user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
  }, {});
  return user;
};
