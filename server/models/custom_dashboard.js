
module.exports = (sequelize, DataTypes) => {
  const customDashboard = sequelize.define('t_custom_dashboard', {
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
    boxes: {
      allowNull: false,
      type: DataTypes.JSON,
    },
  }, {});
  return customDashboard;
};
