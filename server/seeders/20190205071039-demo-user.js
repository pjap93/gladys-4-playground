
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('t_user', [{
    id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
    firstname: 'John',
    lastname: 'Doe',
    email: 'demo@demo.com',
    password: '$2a$10$jsgdfTRYM4r5ainVwZdRsus44xtLYZn/mWhyBY2ch005MO15BS62u', // mysuperpassword
    language: 'en',
    role: 'admin',
    birthdate: '12/12/1990',
    created_at: '2019-02-12 07:49:07.556 +00:00',
    updated_at: '2019-02-12 07:49:07.556 +00:00',
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_user', null, {}),
};
