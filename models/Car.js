const { Model, DataTypes } = require('sequelize');

class Car extends Model {
  static initModel(sequelize) {
    Car.init(
      {
        plate_number: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        model: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        color: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        customer_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Car',
        tableName: 'cars',
      }
    );
  }
}

module.exports = Car;
