
module.exports = (sequelize, DataTypes) => {
  const house = sequelize.define('t_house', {
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
    latitude: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    longitude: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
  }, {});
  return house;
};
