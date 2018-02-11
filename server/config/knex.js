var knex = require('knex')({
    client: 'pg',
    version: '10.1',
    connection: require('./db')
  });

  module.exports = knex;