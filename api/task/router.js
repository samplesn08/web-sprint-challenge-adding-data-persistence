// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    // return an array of tasks
    Tasks.find()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(404).json({ message: err.message })
        })
});

router.post('/', (req, res) => {
    // return the new task
    Tasks.makeNew(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
});

module.exports = router;