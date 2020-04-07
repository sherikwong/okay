const Router = require('express');
const router = Router();
const models = require('../../models');

const AssignedTask = models.assignedTasks;
const User = models.user;

router.post('/', async function (req, res, next) {
  try {
    const { taskId, userId, dueDate } = req.body;
    const sanitized = {
      taskId: String(taskId),
      userId: String(userId),
      dueDate: null
    };
    const task = await AssignedTask.create(sanitized);
    res.send(task);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

/* GET users listing. */
router.get('/user/:id', async function (req, res, next) {
  const {id} = req.params;
  const tasks = await AssignedTask.findAll({
    where: { userId: id }
  })
    res.send(tasks);
});

/* GET users listing. */
router.get('/task/:id', async function (req, res, next) {
  console.log('Getting task');
  try {
    const {id} = req.params;
    let tasks = await AssignedTask.findAll({
      where: { taskId: id }
    })

    tasks = tasks.map(async task => {
      const user = await User.findByPk(task.userId);
      console.log(user.firstName);

      return {...task, user: {
        firstName: user.firstName,
        lastName: user.lastName,
        photoUrl: user.photoUrl
      }};
    });

    console.log(tasks);

    res.send(tasks);
  } catch (error) {
    console.error(error);
    next(error);
  }
});



module.exports = router;
