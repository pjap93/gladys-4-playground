// EVENTS
const { driverReady } = require('./events/zwave.driverReady');
const { driverFailed } = require('./events/zwave.driverFailed');
const { nodeAdded } = require('./events/zwave.nodeAdded');
const { nodeEvent } = require('./events/zwave.nodeEvent');
const { valueAdded } = require('./events/zwave.valueAdded');
const { valueChanged } = require('./events/zwave.valueChanged');
const { valueRemoved } = require('./events/zwave.valueRemoved');
const { nodeReady } = require('./events/zwave.nodeReady');
const { notification } = require('./events/zwave.notification');
const { scanComplete } = require('./events/zwave.scanComplete');
const { controllerCommand } = require('./events/zwave.controllerCommand');

// COMMANDS
const { connect } = require('./commands/zwave.connect');
const { disconnect } = require('./commands/zwave.disconnect');
const { healNetwork } = require('./commands/zwave.healNetwork');
const { getNodeParams } = require('./commands/zwave.getNodeParams');

const DEFAULT_ZWAVE_OPTIONS = {
  Logging: false,
  ConsoleOutput: false,
  SaveConfiguration: true,
};

const ZwaveManager = function ZwaveManager(Zwave, driverPath) {
  this.driverPath = driverPath;
  this.zwave = new Zwave(DEFAULT_ZWAVE_OPTIONS);
  this.nodes = [];
  // setup all events listener
  this.zwave.on('driver ready', this.driverReady.bind(this));
  this.zwave.on('driver failed', this.driverFailed.bind(this));
  this.zwave.on('node added', this.nodeAdded.bind(this));
  this.zwave.on('node event', this.nodeEvent.bind(this));
  this.zwave.on('value added', this.valueAdded.bind(this));
  this.zwave.on('value changed', this.valueChanged.bind(this));
  this.zwave.on('node ready', this.nodeReady.bind(this));
  this.zwave.on('notification', this.notification.bind(this));
  this.zwave.on('scan complete', this.scanComplete.bind(this));
  this.zwave.on('controller command', this.controllerCommand.bind(this));
};

// EVENTS
ZwaveManager.prototype.driverReady = driverReady;
ZwaveManager.prototype.driverFailed = driverFailed;
ZwaveManager.prototype.nodeAdded = nodeAdded;
ZwaveManager.prototype.nodeEvent = nodeEvent;
ZwaveManager.prototype.valueAdded = valueAdded;
ZwaveManager.prototype.valueChanged = valueChanged;
ZwaveManager.prototype.valueRemoved = valueRemoved;
ZwaveManager.prototype.nodeReady = nodeReady;
ZwaveManager.prototype.notification = notification;
ZwaveManager.prototype.scanComplete = scanComplete;
ZwaveManager.prototype.controllerCommand = controllerCommand;

// COMMANDS
ZwaveManager.prototype.connect = connect;
ZwaveManager.prototype.disconnect = disconnect;
ZwaveManager.prototype.healNetwork = healNetwork;
ZwaveManager.prototype.getNodeParams = getNodeParams;

module.exports = ZwaveManager;
