
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('t_message', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    sender_id: {
      allowNull: true,
      type: DataTypes.UUID,
      references: {
        model: 't_user',
        key: 'id',
      },
    },
    receiver_id: {
      allowNull: true,
      type: DataTypes.UUID,
      references: {
        model: 't_user',
        key: 'id',
      },
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    conversation_id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    is_read: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    classification: {
      type: DataTypes.JSON,
    },
  }, {});
  return message;
};
