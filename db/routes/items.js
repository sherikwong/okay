const Router = require('express');
const router = Router();
const models = require('../models');
const Sequelize = require('sequelize')


const Op = Sequelize.Op;
const Items = models.item;

/* GET users listing. */
router.get('/', function (req, res, next) {
  models.item.findAll().then((items) => {
    res.send(items);
  });
});

router.post('/', function (req, res, next) {
  const itemParams = req.body;
  Items.create(itemParams)
    .then(item => {
      res.send(item)
    })
    .catch(error => res.status(400).send('Error inserting new item', error))
});

router.get('/id/:id', function (req, res, next) {
  Items.findByPk(req.params.id)
    .then(foundItem => {
      res.send(foundItem);
    })
});

router.post('/id/:id, updatedItem', function (req, res, next) {
  Items.update(updatedItem, {
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

  Items.findAll({
    where: query
  }).then(items => res.send(items));
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
