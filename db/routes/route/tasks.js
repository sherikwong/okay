const Router = require('express');
const router = Router();
const models = require('../../../models');
const Tasks = models.task;
const {generate} = require('../generic');

generate(Tasks);

module.exports = router;
