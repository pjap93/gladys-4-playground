
module.exports = (sequelize, DataTypes) => {
  const device = sequelize.define('t_device', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    room_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 't_room',
        key: 'id',
      },
    },
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    selector: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
  }, {});

  device.associate = (models) => {
    device.belongsTo(models.Room, {
      foreignKey: 'room_id',
      targetKey: 'id',
      as: 'room',
    });
    device.hasMany(models.DeviceFeatureState, {
      foreignKey: 'device_id',
      sourceKey: 'id',
      as: 'device_features',
    });
  };

  return device;
};
