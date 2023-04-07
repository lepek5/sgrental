import mariadb from "mariadb";
import config from "../config";
const Database = mariadb.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});
export default Database;