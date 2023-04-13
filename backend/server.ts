import express from "express";
import cors from "cors";
import config from "./config";
import Api from "./routes";
import errorHandler from "./middleware/errorHandling";
import Database from "./database";
const server = express();

server.use(cors({
  origin: "http://localhost:4000"
}));
server.use(express.json());

server.use("/api", Api);

server.use(errorHandler);

const startServer = () => {
  try {
    Database.connect();
    server.listen(config.express.port, config.express.host, () => {
      console.log(`Express is running at ${config.express.host}:${config.express.port}`)
    });
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : "Express encountered an error trying to start")
  }
}
export default startServer;