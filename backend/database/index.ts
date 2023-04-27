import { Sequelize } from "sequelize";
import { SequelizeStorage, Umzug } from "umzug";
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
    }
  },
  disconnect: async () => await sequelize.close(),
  runMigrate: async () => {
    const migrator = new Umzug({
      migrations: {
        glob: 'migrations/*.js',
      },
      storage: new SequelizeStorage({ sequelize: Database.sequelize, tableName: 'migrations' }),
      context: sequelize.getQueryInterface(),
      logger: console,
    })
    const migrations = await migrator.up()
    console.log('Migrations up to date', { files: migrations.map((mig) => mig.name), })
  },
  sequelize: sequelize
};
export default Database;