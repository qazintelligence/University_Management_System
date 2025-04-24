const Enrollment = require("../models/Enrollment");

async function enrollStudent(studentId, courseId) {
    const enrollment = new Enrollment({ student: studentId, course: courseId });
    return await enrollment.save();
}

async function getAllEnrollments() {
    return await Enrollment.find().populate("student").populate("course");
}

module.exports = {
    enrollStudent,
    getAllEnrollments,
};
