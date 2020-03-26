import {Router} from 'express';
import models from '../models/index';
import {Op} from 'sequelize';
import { QueryStringUtils } from '../../src/app/utils/query-string.utils';


const router = Router();
const Items = models.item;

/* GET users listing. */
router.get('/', function (req, res, next) {
  models.item.findAll().then((items) => {
    res.send(items);
  });
});

router.get('/id:id', function (req, res, next) {
  Items.findByPk(req.params.id)
    .then(foundItem => {
      res.send(foundItem);
    })
});

router.get('/query:query', function (req, res, next) {
  const sqlParams = {};
  const parsedQuery = QueryStringUtils.parse(req.params.query);

  Object.entries(parsedQuery).forEach(([key, value]) => {
    sqlParams[key] = {
      [Op.and]: value
    }
  });
});

export default router;


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
