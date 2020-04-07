const AssignedTask = (db, sequelize) => {
  const model = db.define('assignedTasks', {
    dueDate: { type: sequelize.DATE, allowNull: true },
    completed: { type: sequelize.BOOLEAN, allowNull: true },
    userId: {type: sequelize.STRING, allowNull:false, unique: false},
    taskId: {type: sequelize.STRING, allowNull:false, unique: false}
  });

  return model;
}

module.exports = AssignedTask;
