const Gladys = require('./lib');
const server = require('./api/');

const SERVER_PORT = parseInt(process.env.SERVER_PORT, 10) || 1337;

(async () => {
  // create Gladys object
  const gladys = Gladys();

  // start Gladys
  await gladys.start();

  // start server
  server.start(gladys, SERVER_PORT);
})();
