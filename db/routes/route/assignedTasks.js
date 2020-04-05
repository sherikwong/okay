const Router = require('express');
const router = Router();
const models = require('../../models');

const AssignedTask = models.assignedTask;

/* GET users listing. */
router.get('/', function (req, res, next) {
  AssignedTask.findAll().then((items) => {
    res.send(items);
  });
});

router.post('/', function (req, res, next) {
  const task = req.body;
  AssignedTask.create(task)
    .then(item => {
      res.send(item)
    })
    .catch(error => res.status(400).send('Error inserting new item', error))
});

module.exports = router;
