class CourseDTO {
    constructor({ id, title, description, teacher }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.teacher = teacher;
    }
}
module.exports = CourseDTO;