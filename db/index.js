import pg from "pg";
const pool = new pg.Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432
});
export const db = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
