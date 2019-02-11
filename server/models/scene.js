
module.exports = (sequelize, DataTypes) => {
  const scene = sequelize.define('t_scene', {
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
    actions: {
      allowNull: false,
      type: DataTypes.JSON,
    },
    last_executed: {
      type: DataTypes.DATE,
    },
  }, {});
  return scene;
};
