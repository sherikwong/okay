const Task = (db, sequelize) => {
  const model = db.define('task', {
    name: { type: sequelize.STRING, allowNull: false },
    rating: { type: sequelize.STRING, allowNull: true },
    priority: { type: sequelize.INTEGER, allowNull: true },
    location: { type: sequelize.STRING, allowNull: true },
    description: { type: sequelize.STRING, allowNull: true },
    due: { type: sequelize.DATE, allowNull: true },
    duration: { type: sequelize.ARRAY(sequelize.INTEGER), allowNull: true },
    frequency: { type: sequelize.ARRAY(sequelize.STRING), allowNull: true },
  });
  return model;
}
module.exports = Task;

