
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => { //projects table
        tbl.increments('project_id');
        tbl.string('project_name').notNullable();
        tbl.string('project_description');
        tbl.boolean('project_completed').defaultTo(false);
    })
    .createTable('resources', tbl => { //resources table 
        tbl.increments('resource_id');
        tbl.string('resource_name').notNullable().unique();
        tbl.string('resource_description');
    })
    .createTable('tasks', tbl => { //tasks table
        tbl.increments('task_id');
        tbl.string('task_description').notNullable();
        tbl.string('task_notes');
        tbl.boolean('task_completed').defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects');
    })
    .createTable('project_resources', tbl => { //project_resources table
        tbl.increments('pro_rec_id');
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
