const Item = (db, sequelize) => {
  const model = db.define('item', {
    name: { type: sequelize.STRING, allowNull: false },
    quantity: { type: sequelize.INTEGER, allowNull: true },
    unit: { type: sequelize.STRING, allowNull: true },
    type: { type: sequelize.STRING, allowNull: true },
    location: { type: sequelize.STRING, allowNull: true },
    description: { type: sequelize.STRING },
  });

  // const inventory = [
  //   {
  //     id: 1,
  //     name: 'Curry Chicken',
  //     quantity: 1,
  //     unit: 'Packet',
  //     type: 'Meat',
  //     dateUpdated: null,
  //     dateAdded: new Date(),
  //     location: 'Freezer',
  //   },
  //   {
  //     id: 2,
  //     name: 'Chickpeas',
  //     quantity: 1,
  //     unit: 'Can',
  //     type: 'Legume',
  //     dateUpdated: null,
  //     dateAdded: new Date(),
  //     location: 'Pantry'
  //   },
  // ];

  // inventory.forEach(item => model.create(item));

  return model;

};

module.exports = Item;

