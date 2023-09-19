import knex from 'knex';
export const query = knex({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
  pool: { min: 0, max: 7 },
});
