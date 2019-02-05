module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './gladys-development.db',
    operatorsAliases: false,
    logging: true,
    define: {
      underscored: true,
    },
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
  },
  production: {
    dialect: 'sqlite',
    storage: process.env.SQLITE_FILE_PATH || './gladys-production.db',
    operatorsAliases: false,
    logging: true,
    define: {
      underscored: true,
    },
  },
};
