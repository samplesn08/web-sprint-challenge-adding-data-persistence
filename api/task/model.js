// build your `Task` model here
const db = require('../../data/dbConfig');

const find = () => {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.project_id')
        .select('*')
};

const makeNew = (newTask) => {
    return db('tasks')
        .insert(newTask)
            .then(task => {
                return task[0];
            })
};

module.exports = {
    find,
    makeNew
}