// build your `Project` model here
const db = require('../../data/dbConfig');

const find = () => {
    return db('projects')
};

function getById(project_id) {
    return db('projects')
      .where({ project_id })
      .first();
  }

const makeNew = (newProject) => {
    return db('projects')
        .insert(newProject)
        .then(ids => {
            return getById(ids[0])
        })
};

module.exports = {
    find,
    makeNew
}