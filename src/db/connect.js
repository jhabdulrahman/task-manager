const connectionString = 'mongodb+srv://jhabdulrahman_db_user:HMadmin25@nodeproject.g62pnns.mongodb.net/?appName=NodeProject&retryWrites=true&w=majority';
const mongoose = require('mongoose');
const connectDb = async(url) => {
    await mongoose.connect(url || connectionString);
    console.log('Connected to MongoDB successfully');
};

module.exports = connectDb;