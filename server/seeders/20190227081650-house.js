
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('t_house', [{
    id: 'a741dfa6-24de-4b46-afc7-370772f068d5',
    name: 'Test house',
    selector: 'test-house',
    created_at: '2019-02-12 07:49:07.556 +00:00',
    updated_at: '2019-02-12 07:49:07.556 +00:00',
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_house', null, {}),
};
