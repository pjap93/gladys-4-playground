const { EVENT_LIST } = require('../utils/constants');

module.exports = (sequelize, DataTypes) => {
  const trigger = sequelize.define('t_trigger', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    type: {
      allowNull: false,
      type: DataTypes.ENUM(EVENT_LIST),
    },
    active: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    rule: {
      allowNull: false,
      type: DataTypes.JSON,
    },
    last_triggered: {
      type: DataTypes.DATE,
    },
  }, {});

  trigger.associate = (models) => {
    trigger.belongsToMany(models.Scene, {
      through: {
        model: models.TriggerScene,
        unique: true,
      },
      foreignKey: 'trigger_id',
      as: 'scenes',
    });
  };

  return trigger;
};
