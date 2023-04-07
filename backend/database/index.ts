import mariadb from "mariadb";
import config from "../config";
const Database = mariadb.createPool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});
console.log("host", config.db.host, "port", config.db.port);
export default Database;