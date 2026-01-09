const express = require('express');
const app = express();
const taskRoutes = require('./routes/task.routes');

app.use('/api/v1/tasks', taskRoutes);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API');
});

app.get('/test', (req, res) => {
    res.send('Test route is working!');
});

const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



module.exports = app;