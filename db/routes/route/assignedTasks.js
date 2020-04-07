const Router = require('express');
const router = Router();
const models = require('../../models');

const AssignedTask = models.assignedTasks;

/* GET users listing. */
router.get('/user/:id', async function (req, res, next) {
  const {userId} = req.params;
  const tasks = await AssignedTask.findAll({
    where: { userId }
  })
    res.send(tasks);
});

/* GET users listing. */
router.get('/task/:id', async function (req, res, next) {
  try {
    console.log('Getting task');
    const {taskId} = req.params;
    const tasks = await AssignedTask.findAll({
      where: { taskId }
    })
      res.send(tasks);
  } catch (error) {
    console.error(error);
    next(error);
  }
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
    .catch(error => {
      console.log(error);
      next(error);
    })
});

module.exports = router;
