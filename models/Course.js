const { Schema, model } = require('mongoose');

const CourseSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    teacher: { type: Schema.Types.ObjectId, ref: 'User' },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
}, { timestamps: true });

module.exports = model('Course', CourseSchema);