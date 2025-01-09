const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.DB_URI;
        if (!uri) {
            throw new Error('DB_URI is not defined in .env file');
        }
        await mongoose.connect(uri);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
