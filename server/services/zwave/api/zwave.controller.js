
module.exports = function ZwaveController(zwaveManager) {
  /**
   * @api {get} /api/v1/service/zwave/node Get Zwave nodes
   * @apiName getNodes
   * @apiGroup Zwave
   */
  async function getNodes(req, res) {
    const nodes = zwaveManager.getNodes();
    res.json(nodes);
  }

  /**
   * @api {get} /api/v1/service/zwave/neighbor Get Zwave node neighbors
   * @apiName getNodeNeighbors
   * @apiGroup Zwave
   */
  async function getNodeNeighbors(req, res) {
    const nodes = zwaveManager.getNodeNeighbors();
    res.json(nodes);
  }

  /**
   * @api {get} /api/v1/service/zwave/info Get Zwave Informations
   * @apiName getInfos
   * @apiGroup Zwave
   */
  async function getInfos(req, res) {
    const infos = zwaveManager.getInfos();
    res.json(infos);
  }

  return {
    'get /api/v1/service/zwave/node': {
      authenticated: true,
      controller: getNodes,
    },
    'get /api/v1/service/zwave/neighbor': {
      authenticated: true,
      controller: getNodeNeighbors,
    },
    'get /api/v1/service/zwave/info': {
      authenticated: true,
      controller: getInfos,
    },
  };
};
