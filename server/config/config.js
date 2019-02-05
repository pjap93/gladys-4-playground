module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './gladys-development.db',
    operatorsAliases: false,
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
    operatorsAliases: false,
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
  production: {
    dialect: 'sqlite',
    storage: process.env.SQLITE_FILE_PATH || './gladys-production.db',
    operatorsAliases: false,
    logging: true,
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
};
