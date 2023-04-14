import express from "express";
import cors from "cors";
import config from "./config";
import Api from "./routes";
import errorHandler from "./middleware/errorHandling";
import Database from "./database";
const server = express();
const origins = ["http://192.168.0.4:9000", "http://localhost:9000", "http://127.0.0.1:9000"]
const corsOpts = {
  origin: config.frontend.host
}
console.log("Origin", config.frontend.host);
server.use(express.json());

server.use(cors());
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