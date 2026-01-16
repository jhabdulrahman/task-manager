const mongoose = require('mongoose');
const connectDb = async(url) => {
    await mongoose.connect(url || process.env.MONGO_URI);
    console.log('Connected to MongoDB successfully');
};

module.exports = connectDb;