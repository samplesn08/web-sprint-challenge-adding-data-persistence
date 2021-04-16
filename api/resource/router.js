// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    // return an array of resources
    Resources.find()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(404).json({ message: err.message })
        })
});

router.post('/', (req, res) => {
    // return the new resource
    Resources.makeNew(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
});

module.exports = router;