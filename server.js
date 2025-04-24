const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => { console.log('PING' +
    ' received'); res.json({ message: 'pong' }); });

app.use('/auth', require('./routes/auth'));
app.use('/courses', require('./routes/courses'));
app.use('/students', require('./routes/students'));
app.use('/enrollments', require('./routes/enrollments'));

connectDB();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));