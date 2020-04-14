const Router = require('express');
const router = Router();
const models = require('../../models');
// const Sequelize = require('sequelize')

const Users = models.user;

/* GET users listing. */
router.get('/:id', async function (req, res, next) {
  try {
    const { id } = req.params;
    let user;

    console.log('Users=========', id);

    if (id) {
      user = await Users.findByPk(id);
    }

    res.send(user);
  } catch (error) {
    console.log('req.params.id', req.params.id)
    res.status(400).send();
  }
});

router.get('/', async function (req, res, next) {
  try {

    const user = await Users.findAll();
    res.send(user);

  } catch (error) {
    res.status(400).send();
  }
});

router.post('/', function (req, res, next) {
  const { id, firstName, lastName, email, photoUrl } = req.body;

  Users.findOrCreate({ where: { id, firstName, lastName, email, photoUrl } })
    .then(found => {
      res.send(found[0]);
    }).catch(error => {
      console.log(error);
      next(error);
    });
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
