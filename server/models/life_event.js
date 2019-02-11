
module.exports = (sequelize, DataTypes) => {
  const lifeEvent = sequelize.define('t_life_event', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 't_user',
        key: 'id',
      },
    },
    house_id: {
      type: DataTypes.UUID,
      references: {
        model: 't_house',
        key: 'id',
      },
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM(
        'woke_up',
        'went_sleeping',
        'back_at_home',
        'left_home',
        'entered_area',
      ),
    },
    data: {
      type: DataTypes.JSON,
    },
  }, {});
  return lifeEvent;
};
