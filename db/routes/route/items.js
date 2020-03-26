const Router = require('express');
const router = Router();
const models = require('../../../models');
const Items = models.item;
const {generate} = require('../generic');

generate(Items);

module.exports = router;
