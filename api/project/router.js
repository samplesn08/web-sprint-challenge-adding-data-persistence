// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    // return an array of projects
    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(404).json({ message: err.message })
        })
});

router.post('/', (req, res) => {
    // return the new project
    Projects.makeNew(req.body)
        .then(project => {
            if(project.project_completed===1){ //shape data so booleans appear properly
                res.status(201).json({
                    project_id: project.project_id,
                    project_name: project.project_name,
                    project_description: project.project_description,
                    project_completed: true
                })
            }else{
                res.status(201).json({
                    project_id: project.project_id,
                    project_name: project.project_name,
                    project_description: project.project_description,
                    project_completed: false
                })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
});

module.exports = router;