// build your `Project` model here
const db = require('../../data/dbConfig');

const find = () => {
    return db('projects')
};

const makeNew = (newProject) => {
    return db('projects')
        .insert(newProject)
            .then(proj => {
                return proj[0];
            })
};

module.exports = {
    find,
    makeNew
}