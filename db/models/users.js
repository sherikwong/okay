const User = (db, sequelize) => {
  const model = db.define('User', {
    googleId: {type: sequelize.STRING, allowNull: false},
    firstName: { type: sequelize.STRING, allowNull: false },
    lastName: { type: sequelize.STRING, allowNull: false },
    email: { type: sequelize.STRING, allowNull: false },
    photoUrl: { type: sequelize.STRING, allowNull: false }
  });
  return model;

};

module.exports = User;



