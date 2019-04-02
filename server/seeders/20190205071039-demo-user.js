
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('t_user', [{
    id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
    firstname: 'John',
    lastname: 'Doe',
    selector: 'john',
    email: 'demo@demo.com',
    password: '$2a$10$jsgdfTRYM4r5ainVwZdRsus44xtLYZn/mWhyBY2ch005MO15BS62u', // mysuperpassword
    language: 'en',
    picture: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALCwsMCxAMDBAXDw0PFxoUEBAUGh4XFxcXFx4dFxoZGRoXHR0jJCYkIx0vLzIyLy9AQEBAQEBAQEBAQEBAQED/2wBDAREPDxETERUSEhUUERMRFBkUFRUUGSUZGRsZGSUvIh0dHR0iLyotJiYmLSo0NC8vNDRAQD5AQEBAQEBAQEBAQED/wAARCAAFAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAABBAEFAAAAAAAAAAAAAAASAAEDEQITFSExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEAAwEAAAAAAAAAAAAAAAAAADGSk//aAAwDAQACEQMRAD8AjjvOpI7PMdRk1YkQSDzd134iIgpluaP/2Q==',
    role: 'admin',
    birthdate: '12/12/1990',
    telegram_user_id: '555555555',
    created_at: '2019-02-12 07:49:07.556 +00:00',
    updated_at: '2019-02-12 07:49:07.556 +00:00',
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_user', null, {}),
};
