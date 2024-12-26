const { Sequelize } = require('sequelize');

// تنظیم پایگاه داده SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
});

module.exports = sequelize;
