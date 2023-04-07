import express from "express";
import cors from "cors";
import config from "./config";
import Api from "./routes";
const server = express();
server.use(cors());
server.use(express.json());

server.use("/api", Api);

const startServer = () => {
  try {
    server.listen(config.express.port, config.express.host, () => {
      console.log(`Express is running at ${config.express.host}:${config.express.port}`)
    });
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : "Express encountered an error trying to start")
  }
}
export default startServer;