const Router = require('express');
const router = Router();
const models = require('../../models');


const Tasks = models.task;
const Users = models.user;
const TasksAssigned = models.assignedTask;

router.post('/', async (req, res, next) => {
  try {
    await TasksAssigned.create(req.body);
    res.end();
  } catch(error) {
    res.status(400);
  }
})

// GET tasks associated w/ user
router.get('/user/:id', async (req, res, next) => {
  const tasks = await TasksAssigned.findAll({
    include: [{
      model: Users,
      through: {
        where: { userId: req.params.id }
      }
    }]
  });
  res.send(tasks);
})

// GET users associated w/ task
router.get('/task/:id', async (req, res, next) => {
  const users = await TasksAssigned.findAll({
    include: [{
      model: Tasks,
      through: {
        where: { taskId: req.params.id }
      }
    }]
  });
  res.send(users);
})

module.exports = router;
