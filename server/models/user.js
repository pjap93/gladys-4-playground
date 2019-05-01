const passwordUtils = require('../utils/password');
const { addSelector } = require('../utils/addSelector');
const { AVAILABLE_LANGUAGES_LIST, USER_ROLE_LIST } = require('../utils/constants');

const MAX_SIZE_PROFILE_PICTURE = 30 * 1000; // 30 ko

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
    selector: {
      allowNull: false,
      unique: true,
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
      type: DataTypes.ENUM(AVAILABLE_LANGUAGES_LIST),
    },
    picture: {
      allowNull: true,
      type: DataTypes.TEXT,
      validate: {
        len: [0, MAX_SIZE_PROFILE_PICTURE],
      },
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
      type: DataTypes.ENUM(USER_ROLE_LIST),
    },
    temperature_unit_preference: {
      allowNull: false,
      type: DataTypes.ENUM(['celsius', 'fahrenheit']),
      defaultValue: 'celsius',
    },
    distance_unit_preference: {
      allowNull: false,
      type: DataTypes.ENUM(['metric', 'us']),
      defaultValue: 'metric',
    },
    telegram_user_id: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
    last_latitude: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    last_longitude: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    last_altitude: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    last_accuracy: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    last_location_changed: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    current_house_id: {
      allowNull: true,
      type: DataTypes.UUID,
      references: {
        model: 't_house',
        key: 'id',
      },
    },
    last_house_changed: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  }, {});

  // ensure email is in lowercase
  User.beforeValidate((user) => {
    user.email = String(user.email).toLowerCase();
    if (!user.selector) {
      user.name = user.firstname;
      addSelector(user);
      delete user.name;
    }
  });

  // hash password after validating
  User.afterValidate(async (user, options) => {
    if (user.password) {
      user.password = await passwordUtils.hash(user.password);
    }
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
    User.belongsTo(models.House, {
      foreignKey: 'current_house_id',
      sourceKey: 'id',
      as: 'current_house',
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
