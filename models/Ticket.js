const { Model, DataTypes } = require('sequelize');

class Ticket extends Model {
  static initModel(sequelize) {
    Ticket.init(
      {
        ticket_number: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        parking_slot_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        customer_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        entry_time: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        exit_time: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Ticket',
        tableName: 'tickets',
      }
    );
  }
}

module.exports = Ticket;
