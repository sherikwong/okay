const User = (db, sequelize) => {
  const model = db.define('item', {
    id: { type: sequelize.STRING, allowNull: false, primaryKey: true },
    firstName: { type: sequelize.STRING, allowNull: false },
    lastName: { type: sequelize.STRING, allowNull: false },
    email: { type: sequelize.STRING, allowNull: false },
    photoUrl: { type: sequelize.STRING, allowNull: false },
  });
  return model;

};

module.exports = User;



