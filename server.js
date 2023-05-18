const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const taskRouter = require('./routes/tasks');



//middleware
app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRouter);


//routes
app.get('/', (req, res) => {
    res.send('API is running')
});

app.listen(port, () => {
    console.log('Server is running on port ${port}')
});


