const express = require('express');

const router = express.Router();
const asyncMiddleware = require('../../middlewares/asyncMiddleware');
const create = require('./user.create');

/**
 * @api {post} /api/user Create user
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {String} firstname Firstname of the user
 * @apiParam {String} lastname Lastname of the user
 * @apiParam {String} email Email of the user
 * @apiParam {String} password Password of the user
 *
 * @apiSuccess {String} id id of the created user
 */
router.post('/api/user', asyncMiddleware(create));

module.exports = router;
