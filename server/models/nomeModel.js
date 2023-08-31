const createNameModel = (sequelize, DataTypes) => {
    return sequelize.define('name', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
};

module.exports = createNameModel;