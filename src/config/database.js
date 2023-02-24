const mongoose = require('mongoose');
const config = require('./config');

async function initDB() {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(config.DB_URI);
        console.log('MongoDB connected successfuly!');
    } catch (error) {
        console.log('Not abble to connect to MongoDB:');
        console.error(error);
    }
}

module.exports = initDB;