const Router = require('express');
const router = Router();
const models = require('../../models');
const Sequelize = require('sequelize')


const Op = Sequelize.Op;
const Tasks = models.task;
const Users = models.user;
const TasksAssigned = models.sequelize.models.tasksAssigned;

router.post('/assign', async (req, res, next) => {
  try {
    await TasksAssigned.create(req.body);
    res.end();
  } catch(error) {
    res.status(400);
  }
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  Tasks.findAll().then((tasks) => {
    res.send(tasks);
  });
});

router.post('/', function (req, res, next) {
  const params = req.body;
  console.log(params);
  Tasks.create(params)
    .then(task => {
      res.send(task)
    })
    .catch(error => res.status(400).send('Error inserting new task', error))
});

router.get('/:id', function (req, res, next) {
  console.log('Looking for tasks for', req.params.id, )
  Tasks.findByPk(req.params.id)
    .then(found => {
      res.send(found);
    })
});

router.post('/:id', function (req, res, next) {
  Tasks.update(req.body, {
    where: {
      id: req.params.id
    }
  })
})

router.get('/query/:query', function (req, res, next) {
  const query = req.params.query.split('&').reduce((sql, pair) => {
    const [key, value] = pair.split('=');
    sql[key] = value;
    return sql;
  }, {})

  Tasks.findAll({
    where: query
  }).then(task => res.send(task));
});

router.get('/assign/:id', async (req, res, next) => {
  const users = await Tasks.findAll({
    include: [{
      model: models.user,
      through: {
        // attributes: ['createdAt', 'startedAt', 'finishedAt'],
        where: { taskId: req.params.id }
      }
    }]
  });
  res.send(users);
})






module.exports = router;


// router.get('/', function(req, res) {
//   models.User.findAll({
//     include: [ models.Task ]
//   }).then(function(users) {
//     res.render('index', {
//       title: 'Sequelize: Express Example',
//       users: users
//     });
//   });
// });
