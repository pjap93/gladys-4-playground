
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('t_user', [{
    id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
    firstname: 'John',
    lastname: 'Doe',
    email: 'demo@demo.com',
    password_hash: 'xxxxxxxx',
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_user', null, {}),
};
