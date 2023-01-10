import pkg from "pg";
import environment from "../../environment.js";

const { Pool } = pkg;

const pool = new Pool({
  host: environment.pg.host,
  port: environment.pg.port,
  database: environment.pg.database,
  user: environment.pg.user,
  password: environment.pg.password,
});

export function query(text: any, params?: any, callback?: any) {
  return pool.query(text, params, callback);
}
