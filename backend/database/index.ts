import mariadb from "mariadb";
import { Sequelize } from "sequelize";
import config from "../config";
const sequelize = new Sequelize({
  host: config.db.host,
  port: config.db.port,
  username: config.db.user,
  password: config.db.password,
  database: config.db.database,
  dialect: "mariadb"
});
const Database = {
  connect: async () => {
    try {
      await sequelize.authenticate();
      console.log("Sequelize", "Connection to database established.");
    } catch (err) {
      console.error("Sequelize", err);
    }
  },
  disconnect: async () => await sequelize.close(),
  sequelize: sequelize
};
console.log("host", config.db.host, "port", config.db.port);
export default Database;