const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

// SQLite
const sequelize = new Sequelize('mainDB', null, null, config[env]);

const AreaModel = require('./area');
const CalendarModel = require('./calendar');
const CalendarEventModel = require('./calendar_event');
const CustomDashboardModel = require('./custom_dashboard');
const DeviceFeatureStateModel = require('./device_feature_state');
const DeviceFeatureModel = require('./device_feature');
const DeviceModel = require('./device');
const HouseModel = require('./house');
const LifeEventModel = require('./life_event');
const LocationModel = require('./location');
const MessageModel = require('./message');
const PodModel = require('./pod');
const RoomModel = require('./room');
const SceneModel = require('./scene');
const ScriptModel = require('./script');
const ServiceModel = require('./service');
const TriggerSceneModel = require('./trigger_scene');
const TriggerModel = require('./trigger');
const UserModel = require('./user');
const VariableModel = require('./variable');

const db = {
  sequelize,
  Sequelize,
  Area: AreaModel(sequelize, Sequelize),
  Calendar: CalendarModel(sequelize, Sequelize),
  CalendarEvent: CalendarEventModel(sequelize, Sequelize),
  CustomDashboard: CustomDashboardModel(sequelize, Sequelize),
  DeviceFeatureState: DeviceFeatureStateModel(sequelize, Sequelize),
  DeviceFeature: DeviceFeatureModel(sequelize, Sequelize),
  Device: DeviceModel(sequelize, Sequelize),
  House: HouseModel(sequelize, Sequelize),
  LifeEvent: LifeEventModel(sequelize, Sequelize),
  Location: LocationModel(sequelize, Sequelize),
  Message: MessageModel(sequelize, Sequelize),
  Pod: PodModel(sequelize, Sequelize),
  Room: RoomModel(sequelize, Sequelize),
  Scene: SceneModel(sequelize, Sequelize),
  Script: ScriptModel(sequelize, Sequelize),
  Service: ServiceModel(sequelize, Sequelize),
  TriggerScene: TriggerSceneModel(sequelize, Sequelize),
  Trigger: TriggerModel(sequelize, Sequelize),
  User: UserModel(sequelize, Sequelize),
  Variable: VariableModel(sequelize, Sequelize),
};

// Associate all model
const properties = Object.keys(db);
properties.forEach((prop) => {
  if (prop === 'sequelize' || prop === 'Sequelize') {
    return;
  }
  if (db[prop].associate) {
    db[prop].associate(db);
  }
});

module.exports = db;
