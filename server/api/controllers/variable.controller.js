const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function VariableController(gladys) {
  /**
   * @api {post} /api/service/:service_name/variable/:variable_key Save service variable
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

  /**
   * @api {post} /api/variable/:variable_key Save variable
   * @apiName SaveVariable
   * @apiGroup Variable
   *
   * @apiParam {string} value value to save
   */
  async function setValue(req, res) {
    const variable = await gladys.variable.setValue(req.params.variable_key, req.body.value);
    res.json(variable);
  }

  return Object.freeze({
    setForLocalService: asyncMiddleware(setForLocalService),
    setValue: asyncMiddleware(setValue),
  });
};
