const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

module.exports = model('Student', StudentSchema);