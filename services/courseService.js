const Course = require("../models/Course");
const { getSortStrategy } = require("../strategies/CourseSortStrategyFactory");
const { CourseSorter }    = require("../strategies/courseSortingStrategy");

async function createCourse(courseData) {
    const course = new Course(courseData);
    return await course.save();
}

async function getSortedCourses(sortType = "date") {
    const courses = await Course.find()
        .populate("teacher")
        .populate("students");

    const strategy = getSortStrategy(sortType);
    const sorter = new CourseSorter(strategy);
    return sorter.sort(courses);
}

async function getCourseById(courseId) {
    return await Course.findById(courseId).populate("teacher").populate("students");
}

async function updateCourse(courseId, updateData) {
    return await Course.findByIdAndUpdate(courseId, updateData, { new: true });
}

async function deleteCourse(courseId) {
    return await Course.findByIdAndDelete(courseId);
}

module.exports = {
    createCourse,
    getSortedCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};
