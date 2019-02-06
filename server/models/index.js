const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

// SQLite
const sequelize = new Sequelize('mainDB', null, null, config[env]);

const UserModel = require('./user');
const LocationModel = require('./location');

const db = {
  sequelize,
  Sequelize,
  User: UserModel(sequelize, Sequelize),
  Location: LocationModel(sequelize, Sequelize),
};

module.exports = db;
