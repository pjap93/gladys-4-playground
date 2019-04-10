const { parseWebsocketMessage, formatWebsocketMessage } = require('../../utils/websocketUtils');
const { EVENTS, WEBSOCKET_MESSAGE_TYPES } = require('../../utils/constants');
const logger = require('../../utils/logger');

const WebsocketManager = function WebsocketManager(wss, gladys) {
  this.wss = wss;
  this.gladys = gladys;
  this.connections = {};
  this.gladys.event.on(EVENTS.WEBSOCKET.SEND, event => this.sendMessageUser(event));
};

/**
 * @description Send a websocket message to the user.
 * @param {Object} event - Event.
 * @example
 * sendMessageUser(event);
 */
function sendMessageUser({ type, payload, userId }) {
  if (!this.connections[userId]) {
    return;
  }
  this.connections[userId].forEach((userConnection) => {
    userConnection.client.send(formatWebsocketMessage(type, payload));
  });
}

/**
 * @description When a user is connected.
 * @param {Object} user - User Object.
 * @param {Object} client - Websocket client.
 * @example
 * userConnected(user, ws);
 */
function userConnected(user, client) {
  logger.debug(`User ${user.firstname} connected in websocket`);
  if (!this.connections[user.id]) {
    this.connections[user.id] = [];
  }
  const connectionIndex = this.connections[user.id].findIndex(elem => elem.client === client);

  if (connectionIndex === -1) {
    this.connections[user.id].push({
      user,
      client,
    });
  }

  return null;
}

/**
 * @description When a user is disconnected.
 * @param {Object} user - User Object.
 * @param {Object} client - Websocket client.
 * @example
 * userDisconnected(user, ws);
 */
function userDisconnected(user, client) {
  logger.debug(`User ${user.firstname} connected in websocket`);
  if (!this.connections[user.id]) {
    this.connections[user.id] = [];
  }
  const connectionIndex = this.connections[user.id].findIndex(elem => elem.client === client);

  if (connectionIndex !== -1) {
    this.connections[user.id].splice(connectionIndex, 1);
  }

  return null;
}

/**
 * @description Init websocket server.
 * @example
 * init();
 */
function init() {
  this.wss.on('connection', (ws) => {
    logger.debug(`New user connected in websocket, ${ws}`);
    let user;
    let authenticated = false;
    ws.on('close', () => {
      if (user) {
        this.userDisconnected(user, ws);
      }
    });
    ws.on('message', async (data) => {
      const parsedMessage = parseWebsocketMessage(data);
      switch (parsedMessage.type) {
      case WEBSOCKET_MESSAGE_TYPES.AUTHENTICATION.REQUEST:
        try {
        // we validate the token
          const userId = this.gladys.session.validateAccessToken(parsedMessage.payload.accessToken, 'dashboard:write');
          user = await this.gladys.user.getById(userId);
          authenticated = true;
          this.userConnected(user, ws);
        } catch (e) {
          logger.warn(e);
          ws.terminate();
        }
        break;
      default:
        logger.debug(`Message type not handled`);
      }
    });
    setTimeout(() => {
      if (authenticated === false) {
        ws.terminate();
      }
    }, 5000);
  });
  return null;
}

WebsocketManager.prototype.init = init;
WebsocketManager.prototype.userConnected = userConnected;
WebsocketManager.prototype.userDisconnected = userDisconnected;
WebsocketManager.prototype.sendMessageUser = sendMessageUser;

module.exports = WebsocketManager;
