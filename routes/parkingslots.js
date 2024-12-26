const express = require('express');
const ParkingSlot = require('../models/ParkingSlot');
const router = express.Router();

// ایجاد جای پارک جدید
router.post('/', async (req, res) => {
    try {
        const parkingSlot = await ParkingSlot.create(req.body);
        res.status(201).json(parkingSlot);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// دریافت همه جای پارک‌ها
router.get('/', async (req, res) => {
    try {
        const parkingSlots = await ParkingSlot.findAll();
        res.json(parkingSlots);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ویرایش جای پارک
router.put('/:id', async (req, res) => {
    try {
        const parkingSlot = await ParkingSlot.findByPk(req.params.id);
        if (!parkingSlot) return res.status(404).json({ error: 'Parking Slot not found' });

        await parkingSlot.update(req.body);
        res.json(parkingSlot);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// حذف جای پارک
router.delete('/:id', async (req, res) => {
    try {
        const parkingSlot = await ParkingSlot.findByPk(req.params.id);
        if (!parkingSlot) return res.status(404).json({ error: 'Parking Slot not found' });

        await parkingSlot.destroy();
        res.json({ message: 'Parking Slot deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
