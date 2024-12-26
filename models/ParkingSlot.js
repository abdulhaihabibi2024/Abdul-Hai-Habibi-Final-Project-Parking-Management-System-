const { DataTypes, Model } = require('sequelize');  // اطمینان از وارد کردن Model

class ParkingSlot extends Model {
    static initModel(sequelize) {
        // تعریف مدل ParkingSlot
        ParkingSlot.init({
            slotNumber: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true, // باید یکتا باشد
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'available', // وضعیت پیش‌فرض پارکینگ
            },
        }, {
            sequelize,
            modelName: 'ParkingSlot',  // نام مدل
            tableName: 'parking_slots', // نام جدول
        });
    }
}

module.exports = ParkingSlot;
