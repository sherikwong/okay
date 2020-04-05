const {sequelize} = require('../models');

const AssignedTask = (db, sequelize) => {
  const model = db.define('assignedTask', {
    userId: { type: sequelize.STRING, allowNull: false },
    taskId: { type: sequelize.STRING, allowNull: false },
  });

  return model;
}

module.exports = AssignedTask;
