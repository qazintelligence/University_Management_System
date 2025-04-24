const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const EntityFactory = require('../factories/entityFactory');
require('dotenv').config();

router.post('/register', async (req, res) => {
    const dto = EntityFactory.createUserDTO(req.body);
    try {
        let user = await User.findOne({ email: dto.email });
        if (user) return res.status(400).json({ message: 'User exists' });
        user = new User({ ...dto, password: req.body.password });
        await user.save();
        res.status(201).json({ message: 'User created' });
    } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });
        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const payload = { id: user.id, role: user.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;