const passwordUtils = require('../utils/password');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('t_user', {
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
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [8],
      },
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM('admin', 'habitant', 'guest'),
    },
  }, {});

  // ensure email is in lowercase
  User.beforeValidate((user) => {
    user.email = String(user.email).toLowerCase();
  });

  // hash password before inserting
  User.beforeCreate(async (user, options) => {
    user.password = await passwordUtils.hash(user.password);
  });

  User.prototype.toJSON = function toJSON() {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  User.prototype.comparePassword = async function comparePassword(password) {
    return passwordUtils.compare(password, this.get('password'));
  };

  User.associate = (models) => {
    User.hasMany(models.Location, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      as: 'locations',
    });
    User.hasMany(models.LifeEvent, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      as: 'life_events',
    });
    User.hasMany(models.Message, {
      foreignKey: 'sender_id',
      sourceKey: 'id',
      as: 'sent_messages',
    });
    User.hasMany(models.Message, {
      foreignKey: 'receiver_id',
      sourceKey: 'id',
      as: 'received_messages',
    });
    User.hasMany(models.Calendar, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      as: 'calendars',
    });
  };

  return User;
};
