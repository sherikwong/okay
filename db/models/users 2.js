const User = (db, sequelize) => {
  const model = db.define('item', {
    name: { type: sequelize.STRING, allowNull: false }
  });
  return model;

};

module.exports = User;

