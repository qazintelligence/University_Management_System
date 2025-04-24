class EntityFactory {
    static createUserDTO(body) {
        const { name, email, role } = body;
        return { name, email, role };
    }
    static createStudentDTO(body) {
        return { user: body.user };
    }
    static createCourseDTO(body) {
        const { title, description, teacher } = body;
        return { title, description, teacher };
    }
}
module.exports = EntityFactory;