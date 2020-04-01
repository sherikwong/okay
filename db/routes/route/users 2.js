const Router = require('express');
const router = Router();
const models = require('../../models');
// const Sequelize = require('sequelize')

const Users = models.user;

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.findAll().then((users) => {
    res.send(users);
  });
});

router.post('/', function (req, res, next) {
  const params = req.body;
  Users.create(params)
    .then(user => {
      res.send(user)
    })
    .catch(error => res.status(400).send('Error inserting new user', error))
});

router.get('/id/:id', function (req, res, next) {
  Users.findByPk(req.params.id)
    .then(found => {
      res.send(found);
    })
});

// router.get('/query/:query', function (req, res, next) {
//   const query = req.params.query.split('&').reduce((sql, pair) => {
//     const [key, value] = pair.split('=');
//     sql[key] = value;
//     return sql;
//   }, {})

//   Users.findAll({
//     where: query
//   }).then(user => res.send(user));
// });



module.exports = router;
