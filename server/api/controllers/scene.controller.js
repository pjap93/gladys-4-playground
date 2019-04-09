const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function SceneController(gladys) {
  /**
   * @api {post} /api/v1/scene create
   * @apiName create
   * @apiGroup Scene
   *
   */
  async function create(req, res) {
    const newScene = await gladys.scene.create(req.body);
    res.status(201).json(newScene);
  }

  /**
   * @api {patch} /api/v1/scene/:scene_selector update
   * @apiName update
   * @apiGroup Scene
   *
   */
  async function update(req, res) {
    const newScene = await gladys.scene.update(req.params.scene_selector, req.body);
    res.json(newScene);
  }

  /**
   * @api {get} /api/v1/scene get
   * @apiName get
   * @apiGroup Scene
   *
   */
  async function get(req, res) {
    const scenes = await gladys.scene.get(req.query);
    res.json(scenes);
  }

  /**
   * @api {delete} /api/v1/scene/:scene_selector delete
   * @apiName delete
   * @apiGroup Scene
   *
   */
  async function destroy(req, res) {
    await gladys.scene.destroy(req.params.scene_selector);
    res.json({
      success: true,
    });
  }

  return Object.freeze({
    create: asyncMiddleware(create),
    destroy: asyncMiddleware(destroy),
    get: asyncMiddleware(get),
    update: asyncMiddleware(update),
  });
};
