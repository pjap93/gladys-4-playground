
module.exports = (sequelize, DataTypes) => {
  const variable = sequelize.define('t_variable', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    service_id: {
      allowNull: true,
      type: DataTypes.UUID,
      references: {
        model: 't_service',
        key: 'id',
      },
    },
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    value: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {});
  return variable;
};
