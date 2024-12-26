const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();

// ایجاد مشتری جدید
router.post('/', async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// دریافت همه مشتری‌ها
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ویرایش اطلاعات مشتری
router.put('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });

        await customer.update(req.body);
        res.json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// حذف مشتری
router.delete('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });

        await customer.destroy();
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
