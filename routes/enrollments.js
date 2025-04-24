const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');
const Enrollment = require('../models/Enrollment');
const Student = require('../models/Student');
const Course = require('../models/Course');


router.post('/', auth, roles('TEACHER', 'ADMIN'), async (req, res) => {
    const { studentId, courseId } = req.body;
    try {
        const enrollment = new Enrollment({ student: studentId, course: courseId });
        await enrollment.save();

        await Student.findByIdAndUpdate(studentId, { $push: { enrolledCourses: courseId } });
        await Course.findByIdAndUpdate(courseId, { $push: { students: studentId } });

        res.status(201).json(enrollment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
