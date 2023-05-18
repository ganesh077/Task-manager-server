const express = require('express');
const router = express.Router();
const Task = require('./mongo')

router.post('/', async (req,res) => {
    try {
        const task = new Task(req.body);
        const createdTask = await task.save();
        res.status(201).json(createdTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Failed to create task' });
    }
});

router.get('/', async (req,res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error('Error Fetching tasks:', error);
        res.status(500).json({ error: 'Failed'});
    }
});

module.exports = router;