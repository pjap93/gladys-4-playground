
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('t_room', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    house_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 't_house',
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
  return room;
};