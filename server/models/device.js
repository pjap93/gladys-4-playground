
module.exports = (sequelize, DataTypes) => {
  const device = sequelize.define('t_device', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    service_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 't_service',
        key: 'id',
      },
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
    device.belongsTo(models.Service, {
      foreignKey: 'service_id',
      targetKey: 'id',
      as: 'service',
    });
    device.hasMany(models.DeviceFeature, {
      foreignKey: 'device_id',
      sourceKey: 'id',
      as: 'features',
    });
  };

  return device;
};
