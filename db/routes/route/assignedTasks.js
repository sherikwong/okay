const Router = require('express');
const router = Router();
const models = require('../../models');

const AssignedTask = models.assignedTasks;

/* GET users listing. */
router.get('/', function (req, res, next) {
  AssignedTask.findAll().then((items) => {
    res.send(items);
  });
});

router.post('/', function (req, res, next) {
  const { taskId, userId, dueDate } = req.body;
  const sanitized = {
    taskId: String(taskId),
    userId: String(userId),
    dueDate: null
  };
  console.log(sanitized);
  AssignedTask.create(sanitized)
    .then(item => {
      res.send(item)
    })
    .catch(error => res.status(400).send('Error inserting new item', error))
});

module.exports = router;
