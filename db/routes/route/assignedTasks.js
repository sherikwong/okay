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
  } catch (error) {
    res.status(400);
  }
})

// GET tasks associated w/ user
// TODO: Eager load this from join table
router.get('/user/:id', async (req, res, next) => {
  const tasks = await TasksAssigned.findAll({
    include: [{
      model: Users,
      through: {
        where: { userId: req.params.id }
      }
    }]
  });

  tasks.forEach(async (task, index) => {
    const user = await Users.findByPk(task.userId);
    tasks[index] = { ...task, user };
  })

  res.send(tasks);
})

// GET users associated w/ task
router.get('/task/:id', async (req, res, next) => {
  try {
    // const users = await TasksAssigned.findAll({
    //   where: {
    //     taskId: req.params.id
    //   },
    //   include: [{
    //     model: Tasks,
    //     as: 'tasks'
    //   }]
    // });

    const tasks = await TasksAssigned.findAll({
      where: {
        taskId: req.params.id
      }
    });

    const resultTasks = [];

    tasks.forEach(async (task, index) => {
      const user = await Users.findByPk(task.userId);
      resultTasks.push({
        userId: user.id,
        photoUrl: user.photoUrl,
        firstName: user.firstName,
        lastName: user.lastName,

      })
      console.log(tasks[index]);
    })


    res.send(tasks);
  } catch (error) {
    console.log(req.params.id);
    console.error(error);
    res.sendStatus(500);
    res.end();
  }
})

module.exports = router;
