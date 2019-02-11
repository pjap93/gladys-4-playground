
module.exports = (sequelize, DataTypes) => {
  const trigger = sequelize.define('t_trigger_scene', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    trigger_id: {
      allowNull: true,
      type: DataTypes.UUID,
      references: {
        model: 't_trigger',
        key: 'id',
      },
    },
    scene_id: {
      allowNull: true,
      type: DataTypes.UUID,
      references: {
        model: 't_scene',
        key: 'id',
      },
    },
  }, {});

  trigger.associate = (models) => {
    trigger.belongsToMany(models.Scene, {
      through: {
        model: models.TriggerScene,
        unique: true,
      },
      foreignKey: 'trigger_id',
    });
  };

  return trigger;
};
