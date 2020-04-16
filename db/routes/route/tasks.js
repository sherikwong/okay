const Router = require('express');
const router = Router();
const models = require('../../models');
const Sequelize = require('sequelize')

const Tasks = models.task;
const Users = models.user;


const assignedTasks = require('./assignedTasks');

router.use('/assign', assignedTasks);
/* GET users listing. */
router.get('/', function (req, res, next) {
  Tasks.findAll().then((tasks) => {
    res.send(tasks);
  });
});

router.post('/', function (req, res, next) {
  const params = req.body;
  Tasks.create(params)
    .then(task => {
      res.send(task)
    })
    .catch(error => res.status(400).send('Error inserting new task', error))
});

router.get('/:id', function (req, res, next) {
  // console.log('Looking for tasks for', req.params.id, )
  Tasks.findByPk(req.params.id)
    .then(found => {
      res.send(found);
    })
});

router.post('/:id', async function (req, res, next) {
  try {
    await Tasks.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
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

module.exports = router;
