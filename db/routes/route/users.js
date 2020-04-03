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
  const { id, firstName, lastName, email, photoUrl } = req.body;
  console.log({ id, firstName, lastName, email, photoUrl });

  Users.findOrCreate({ where: { id, firstName, lastName, email, photoUrl } })
    .then(found => {
      console.log(found);
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