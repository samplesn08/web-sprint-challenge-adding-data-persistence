// build your `Project` model here
const db = require('../../data/dbConfig');

const find = async () => {
    const rows = await db('projects')
    rows.forEach(row => {
        if(row.project_completed === 1){
            row.project_completed = true;
        }else{
            row.project_completed = false;
        }
    })
    return rows;
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