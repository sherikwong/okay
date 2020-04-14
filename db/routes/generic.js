const Router = require('express');
const router = Router();
const fs = require('fs-extra');
const path = require('path');

function generate(table) {
  router.get('/', function (req, res, next) {
    table.findAll().then((tasks) => {
      res.send(tasks);
    });
  });

  router.get('/id/:id', function (req, res, next) {
    table.findByPk(req.params.id)
      .then(foundtask => {
        res.send(foundtask);
      })
  });

  router.get('/query/:query', function (req, res, next) {
    const query = req.params.query.split('&').reduce((sql, pair) => {
      const [key, value] = pair.split('=');
      sql[key] = value;
      return sql;
    }, {})

    table.findAll({
      where: query
    }).then(tasks => res.send(tasks));
  });
}
function link(app) {
  fs
  .readdirSync(path.join(__dirname, 'route'))
  .forEach(file => {
    const fileStringSplit = file.split('.');
    const fileWithoutExtension = fileStringSplit.slice(0, fileStringSplit.length - 1).join('');
    app.use(`/${fileWithoutExtension}`, require(`./route/${fileWithoutExtension}`));
  });
}

module.exports = {link, generate};

