const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// ایجاد بلیط جدید
router.post('/', async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body);
        res.status(201).json(ticket);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// دریافت همه بلیط‌ها
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ویرایش اطلاعات بلیط
router.put('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id);
        if (!ticket) return res.status(404).json({ error: 'Ticket not found' });

        await ticket.update(req.body);
        res.json(ticket);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// حذف بلیط
router.delete('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id);
        if (!ticket) return res.status(404).json({ error: 'Ticket not found' });

        await ticket.destroy();
        res.json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
