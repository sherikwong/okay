const AssignedTask = (db, sequelize) => {
  const model = db.define('assignedTasks', {
    // id: {type: sequelize.STRING, primaryKey: true},
    dueDate: { type: sequelize.DATE, allowNull: true },
    completed: { type: sequelize.BOOLEAN, allowNull: true },
  });

  return model;
}

module.exports = AssignedTask;
