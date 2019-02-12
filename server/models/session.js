
module.exports = (sequelize, DataTypes) => {
  const session = sequelize.define('t_session', {
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
    refresh_token_hash: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    valid_until: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    last_seen: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    revoked: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {});

  session.associate = (models) => {
    session.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
      as: 'user',
    });
  };

  return session;
};
