module.exports = (sequelize, DataTypes) => {
  const variable = sequelize.define(
    't_variable',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      service_id: {
        allowNull: true,
        type: DataTypes.UUID,
        references: {
          model: 't_service',
          key: 'id',
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isUppercase: true,
        },
      },
      value: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {},
  );

  variable.associate = (models) => {
    variable.belongsTo(models.Service, {
      foreignKey: 'service_id',
      targetKey: 'id',
      as: 'service',
    });
  };

  return variable;
};
