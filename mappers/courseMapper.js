const CourseDTO = require('../dtos/courseDTO');

module.exports = {
    toDTO(course) {
        return new CourseDTO({ id: course._id, title: course.title, description: course.description, teacher: course.teacher });
    }
};