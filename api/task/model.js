// build your `Task` model here
const db = require('../../data/dbConfig');

const find = async () => {
    const rows = await db('tasks')
        .join('projects', 'tasks.project_id', 'projects.project_id')
        .select('*')
    rows.forEach(row => { //shape data so booleans appear properly
        if(row.task_completed === 1){
            row.task_completed = true;
        }else{
            row.task_completed = false;
        }
    })
    return rows;
};

function getById(task_id) {
    return db('tasks')
      .where({ task_id })
      .first();
  }

const makeNew = (newTask) => {
    return db('tasks')
        .insert(newTask)
        .then(ids => {
            return getById(ids[0])
        })
};

module.exports = {
    find,
    makeNew
}