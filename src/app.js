const express = require('express');
const app = express();
const taskRoutes = require('./routes/task.routes');
const connectDb = require('./db/connect');
require('dotenv').config();
const path = require('path');


// middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


// routes
app.use('/api/v1/tasks', taskRoutes);


const port = process.env.PORT || 5000;

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();