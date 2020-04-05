const AssignedTask = (db, sequelize) => {
  const model = db.define('assignedTask', {
    dueDate: { type: sequelize.DATE, allowNull: true },
  });

  return model;

};

module.exports = AssignedTask;

