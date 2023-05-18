const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://ganesh077:nintendo456..@cluster0.hpvopgj.mongodb.net/taskmanager?retryWrites=true&w=majority'
)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to Connect to MongoDB', err));


const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false},
});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;