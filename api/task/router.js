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
            if(task.task_completed===1){ //shape data so booleans appear properly
                res.status(201).json({
                    task_id: task.task_id,
                    task_notes: task.task_notes,
                    task_description: task.task_description,
                    task_completed: true,
                    project_id: task.project_id
                })
            }else{
                res.status(201).json({
                    task_id: task.task_id,
                    task_notes: task.task_notes,
                    task_description: task.task_description,
                    task_completed: false,
                    project_id: task.project_id
                })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
});

module.exports = router;