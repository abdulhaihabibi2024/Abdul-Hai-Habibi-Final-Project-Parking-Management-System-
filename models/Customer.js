const { DataTypes, Model } = require('sequelize');  // اطمینان از وارد کردن Model

class Customer extends Model {
    static initModel(sequelize) {
        // تعریف مدل Customer
        Customer.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Customer',  // نام مدل
            tableName: 'customers', // نام جدول
        });
    }
}

module.exports = Customer;
