const express = require('express');

const router = express.Router();
const asyncMiddleware = require('../../middlewares/asyncMiddleware');
const create = require('./user.create');

router.post('/user', asyncMiddleware(create));

module.exports = router;
