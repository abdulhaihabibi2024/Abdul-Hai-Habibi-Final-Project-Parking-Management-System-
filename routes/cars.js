const express = require('express');
const Car = require('../models/Car');
const router = express.Router();

// ایجاد خودرو جدید
router.post('/', async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// دریافت همه خودروها
router.get('/', async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// دریافت یک خودرو بر اساس ID
router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (car) {
            res.json(car);
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// به‌روزرسانی خودرو
router.put('/:id', async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (car) {
            await car.update(req.body);
            res.json(car);
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// حذف خودرو
router.delete('/:id', async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (car) {
            await car.destroy();
            res.json({ message: 'Car deleted' });
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
