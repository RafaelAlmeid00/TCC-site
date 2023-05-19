/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const knexfile = require('../knexfile');
const knex = require('knex')(knexfile['development']);
module.exports = knex;
