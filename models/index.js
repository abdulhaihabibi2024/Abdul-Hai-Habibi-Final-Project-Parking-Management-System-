const Sequelize = require('sequelize');
const Customer = require('./Customer');
const ParkingSlot = require('./ParkingSlot');
const Ticket = require('./Ticket');
const Car = require('./Car');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// مقداردهی اولیه مدل‌ها
const initializeModels = () => {
  Customer.initModel(sequelize);
  ParkingSlot.initModel(sequelize);
  Ticket.initModel(sequelize);
  Car.initModel(sequelize);

  // تعریف روابط
  Customer.hasMany(Car, { foreignKey: 'customer_id' });
  Car.belongsTo(Customer, { foreignKey: 'customer_id' });

  ParkingSlot.hasMany(Ticket, { foreignKey: 'parking_slot_id' });
  Ticket.belongsTo(ParkingSlot, { foreignKey: 'parking_slot_id' });

  Customer.hasMany(Ticket, { foreignKey: 'customer_id' });
  Ticket.belongsTo(Customer, { foreignKey: 'customer_id' });

  
  
};

initializeModels();

module.exports = { sequelize, Customer, ParkingSlot, Ticket, Car };
