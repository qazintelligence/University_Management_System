const Student = require("../models/Student");

async function createStudent(data) {
    const student = new Student(data);
    return await student.save();
}

async function getAllStudents() {
    return await Student.find();
}

async function getStudentById(id) {
    return await Student.findById(id);
}

async function updateStudent(id, data) {
    return await Student.findByIdAndUpdate(id, data, { new: true });
}

async function deleteStudent(id) {
    return await Student.findByIdAndDelete(id);
}

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
