const Task = (db, sequelize) => {
  const model = db.define('task', {
    name: { type: sequelize.STRING, allowNull: false },
    room: { type: sequelize.STRING, allowNull: true },
    rating: { type: sequelize.STRING, allowNull: true },
    location: { type: sequelize.STRING, allowNull: true },
    dueDate: { type: sequelize.DATE, allowNull: true },
    completed: { type: sequelize.BOOLEAN, allowNull: true },
    description: { type: sequelize.STRING, allowNull: true },
    assignee: { type: sequelize.ARRAY(sequelize.STRING), allowNull: true },
  });
  return model;
};

module.exports = Task;

