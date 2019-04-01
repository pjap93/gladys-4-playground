const { SESSION_TOKEN_TYPES } = require('../utils/constants');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('t_session', [{
    id: 'ada07710-5f25-4510-ac63-b002aca3bd32',
    user_id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
    token_type: SESSION_TOKEN_TYPES.REFRESH_TOKEN,
    token_hash: 'd3d96a75e6746685699d9be56622a81c8a4cecacd5fbcdcaec9f2458883a3367', // hash of 'refresh-token-test'
    scope: '["dashboard:write"]',
    valid_until: new Date(new Date().getTime() + 10000000),
    created_at: '2019-02-12 07:49:07.556 +00:00',
    updated_at: '2019-02-12 07:49:07.556 +00:00',
  },
  { // expired resfresh token
    id: '91f656b4-48df-4cd0-89fd-c187c83a0427',
    user_id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
    token_type: SESSION_TOKEN_TYPES.REFRESH_TOKEN,
    token_hash: '9c10364cd85f88a65cb14093333d6e79781c838f48fec0db6c2992ce866c400c', // hash of 'refresh-token-test-expired'
    scope: '["dashboard:write"]',
    valid_until: '2018-02-12 07:49:07.556 +00:00',
    created_at: '2019-02-12 07:49:07.556 +00:00',
    updated_at: '2019-02-12 07:49:07.556 +00:00',
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_session', null, {}),
};
