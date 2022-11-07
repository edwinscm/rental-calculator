const { Pool } = require("pg");
var environment = require("./environment");

const pool = new Pool({
  host: environment.pg.host,
  port: environment.pg.port,
  database: environment.pg.database,
  user: environment.pg.user,
  password: environment.pg.password,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
