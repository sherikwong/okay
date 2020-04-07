const Router = require('express');
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.render('index', { title: 'Express' });
  } catch(error) {
    console.log(error);
    next(error);
  }

});

module.exports = router;
