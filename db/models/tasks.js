const Task = (db, sequelize) => {
  const model = db.define('task', {
    // id: {type: sequelize.STRING, primaryKey: true},
    name: { type: sequelize.STRING, allowNull: false },
    // room: { type: sequelize.STRING, allowNull: true },
    // rating: { type: sequelize.STRING, allowNull: true },
    // priority: {type: sequelize.INTEGER, allowNull: true},
    // location: { type: sequelize.STRING, allowNull: true },
    // description: { type: sequelize.STRING, allowNull: true },
  });
  return model;
};

module.exports = Task;

