'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(path.join(__dirname, '../../config/config'))[env];
const db = {};

// let sequelize;

// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

const sequelize = new Sequelize('postgres://localhost:5432/okay', {
  logging: false
});


sequelize.authenticate()
  .then(() => console.log('Connected to DB'))
  .catch(() => console.log('Failed to connect to DB'));


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    console.log(`Dropping and recreating ---- ${model.name}`)
    db[model.name] = model;

    db[model.name].sync(
      // {force: true}
    );
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
