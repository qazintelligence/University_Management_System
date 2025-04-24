const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');
const Student = require('../models/Student');


router.post('/', auth, roles('ADMIN'), async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', auth, async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('user').populate('enrolledCourses');
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;