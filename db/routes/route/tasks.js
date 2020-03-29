const Router = require('express');
const router = Router();
const models = require('../models');
const Sequelize = require('sequelize')


const Op = Sequelize.Op;
const Tasks = models.task;

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

router.get('/id/:id', function (req, res, next) {
  Tasks.findByPk(req.params.id)
    .then(found => {
      res.send(found);
    })
});

// router.post('/id/:id', function (req, res, next) {
//   Tasks.update(task, {
//     where: {
//       id: req.params.id
//     }
//   })
// })

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
