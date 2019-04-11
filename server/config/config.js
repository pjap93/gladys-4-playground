module.exports = {
  development: {
    dialect: 'sqlite',
    storage: process.env.SQLITE_FILE_PATH || './gladys-development.db',
    operatorsAliases: false,
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
  test: {
    dialect: 'sqlite',
    storage: process.env.SQLITE_FILE_PATH || './gladys-test.db',
    operatorsAliases: false,
    logging: false,
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
  production: {
    dialect: 'sqlite',
    storage: process.env.SQLITE_FILE_PATH || './gladys-production.db',
    operatorsAliases: false,
    logging: false,
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
};
