
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('t_variable', [{
    id: '1077f8da-2d7c-4ea0-b414-df9bbc86d193',
    name: 'SECURE_VARIABLE',
    service_id: 'a810b8db-6d04-4697-bed3-c4b72c996279',
    value: 'VALUE',
    created_at: '2019-02-12 07:49:07.556 +00:00',
    updated_at: '2019-02-12 07:49:07.556 +00:00',
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_variable', null, {}),
};
