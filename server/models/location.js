
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('t_location', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 't_user',
        key: 'id',
      },
    },
    latitude: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    longitude: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    altitude: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    accuracy: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
  }, {});
  return location;
};
