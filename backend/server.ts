import express from "express";
import cors from "cors";
import config from "./config";
import Api from "./routes";
import errorHandler from "./middleware/errorHandling";
import Database from "./database";
import authHandler from "./middleware/authHandler";
import cookieParser from "cookie-parser";
import createUsers from "./utils/createInitUsers";
console.error("VITTU", config.db.password)
const server = express();
server.use(express.json());
server.use(cors({
  origin: config.frontend.host,
  credentials: true
}));
server.use(cookieParser());
server.use(authHandler);
server.use("/api", Api);
server.use(errorHandler);

const startServer = async () => {
  console.error("STARTING THE FUCKING SERVEr", "VITTU", config.db.password)
  try {
    await Database.connect();
    await Database.runMigrate();
    server.listen(config.express.port, config.express.host, async () => {
      console.log(`Express is running at ${config.express.host}:${config.express.port}`)
      await createUsers();
    });
  } catch (error: unknown) {
    console.error("STARTING THE FUCKING SERVEr", "VITTU", config.db.password)
    console.error(error instanceof Error ? error.message : "Express encountered an error trying to start")
  }
}
export default startServer;