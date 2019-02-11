
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('t_user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        isLowercase: true,
      },
    },
    birthdate: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    language: {
      allowNull: false,
      type: DataTypes.ENUM('en', 'fr'),
    },
    password_hash: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM('admin', 'habitant', 'guest'),
    },
  }, {});


  user.associate = (models) => {
    user.hasMany(models.Location, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      as: 'locations',
    });
    user.hasMany(models.LifeEvent, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      as: 'life_events',
    });
    user.hasMany(models.Message, {
      foreignKey: 'sender_id',
      sourceKey: 'id',
      as: 'sent_messages',
    });
    user.hasMany(models.Message, {
      foreignKey: 'receiver_id',
      sourceKey: 'id',
      as: 'received_messages',
    });
    user.hasMany(models.Calendar, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      as: 'calendars',
    });
  };

  return user;
};
