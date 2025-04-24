const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');
const Course = require('../models/Course');
const EntityFactory = require('../factories/entityFactory');
const { SortByDate, SortByStudentsCount, SortByTitle, CourseSorter } = require('../strategies/courseSortingStrategy');
const { toDTO } = require('../mappers/courseMapper');

router.get('/', auth, async (req, res) => {
    let courses = await Course.find().populate('teacher').populate('students');
    if (req.query.sort) {
        let strat;
        if (req.query.sort === 'students') strat = new SortByStudentsCount();
        else if (req.query.sort === 'title') strat = new SortByTitle(); // вот оно!
        else strat = new SortByDate();

        courses = new CourseSorter(strat).sort(courses);
    }
    res.json(courses.map(toDTO));
});

router.post('/', auth, roles('TEACHER','ADMIN'), async (req, res) => {
    const dto = EntityFactory.createCourseDTO(req.body);
    try {
        const course = new Course(dto);
        await course.save();
        res.status(201).json(toDTO(course));
    } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;