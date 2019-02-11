
module.exports = (sequelize, DataTypes) => {
  const deviceFeature = sequelize.define('t_device_feature', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    device_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 't_device',
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
    external_id: {
      unique: true,
      type: DataTypes.STRING,
    },
    category: {
      allowNull: false,
      type: DataTypes.ENUM(
        // control
        'light',
        'television',
        'music-player',
        'security-camera',
        'switch',
        'phone',
        'computer',
        // sensors
        'temperature-sensor',
        'humidity-sensor',
        'light-sensor',
        'door-opening-sensor',
        'window-opening-sensor',
        'smoke-sensor',
        'flood-sensor',
        'motion-sensor',
        'rain-sensor',
        'wind-sensor',
        'co2-sensor',
        'co-sensor',
      ),
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM(
        'binary',
        'push',
        'multilevel',
        'color',
      ),
    },
    read_only: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    unit: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    min: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    max: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    last_value: {
      type: DataTypes.DOUBLE,
    },
    last_value_changed: {
      type: DataTypes.DATE,
    },
  }, {});

  deviceFeature.associate = (models) => {
    deviceFeature.belongsTo(models.Device, {
      foreignKey: 'device_id',
      targetKey: 'id',
      as: 'device',
    });
    deviceFeature.hasMany(models.DeviceFeatureState, {
      foreignKey: 'device_feature_id',
      sourceKey: 'id',
      as: 'device_feature_states',
    });
  };

  return deviceFeature;
};
