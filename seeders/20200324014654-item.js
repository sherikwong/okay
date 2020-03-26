'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    return queryInterface.bulkInsert('Items', [
      {
        id: 1,
        name: 'Curry Chicken',
        quantity: 1,
        unit: 'Packet',
        type: 'Meat',
        dateUpdated: null,
        dateAdded: new Date(),
        location: 'Freezer',
      },
      {
        id: 2,
        name: 'Chickpeas',
        quantity: 1,
        unit: 'Can',
        type: 'Legume',
        dateUpdated: null,
        dateAdded: new Date(),
        location: 'Pantry'
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
