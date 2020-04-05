const AssignedTask = (db, sequelize) => {
  const model = db.define('assignedTask', {
    // id: {type: sequelize.UUID, primaryKey: true},
    dueDate: { type: sequelize.DATE, allowNull: true },
    completed: { type: sequelize.BOOLEAN, allowNull: true },
  });

  return model;
}

module.exports = AssignedTask;
