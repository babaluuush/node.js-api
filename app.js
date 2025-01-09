const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
