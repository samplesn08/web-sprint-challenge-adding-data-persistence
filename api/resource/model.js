// build your `Resource` model here
const db = require('../../data/dbConfig');

const find = () => {
    return db('resources')
};

function getById(resource_id) {
    return db('resources')
      .where({ resource_id })
      .first();
  }

const makeNew = (newResource) => {
    return db('resources')
        .insert(newResource)
        .then(ids => {
            return getById(ids[0])
        })
};

module.exports = {
    find,
    makeNew
}