
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
      type: DataTypes.ENUM(
        'scheduled',
      ),
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
  return trigger;
};
