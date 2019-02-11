
module.exports = (sequelize, DataTypes) => {
  const service = sequelize.define('t_service', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    pod_id: {
      allowNull: true,
      type: DataTypes.UUID,
      references: {
        model: 't_pod',
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
    version: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  return service;
};
