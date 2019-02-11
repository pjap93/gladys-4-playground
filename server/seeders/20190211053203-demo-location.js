
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('t_location', [{
    id: 'c63f6dd4-a63f-4757-bff3-3fbdb1b4fd8e',
    user_id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
    latitude: 43.989,
    longitude: -71.989,
    altitude: 0,
    accuracy: 30,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_location', null, {}),
};
