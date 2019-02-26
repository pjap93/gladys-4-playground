const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function VariableController(gladys) {
  /**
   * @api {post} /api/service/:service_name/:variable_key Save service variable
   * @apiName SaveVariable
   * @apiGroup Variable
   *
   * @apiParam {string} value value to save
   */
  async function setForLocalService(req, res) {
    const service = await gladys.service.getLocalServiceByName(req.params.service_name);
    const variable = await gladys.variable.setValue(req.params.variable_key, req.body.value, service.id);
    res.json(variable);
  }

  return Object.freeze({
    setForLocalService: asyncMiddleware(setForLocalService),
  });
};
