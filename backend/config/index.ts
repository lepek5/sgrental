import dotenv from "dotenv";
dotenv.config();
const isDevelopment = process.env.NODE_ENV === "production";
const config = {
  express: {
    port: isDevelopment ? Number(process.env.EXPRESS_PORT_LOCAL) : Number(process.env.EXPRESS_PORT_REMOTE),
    host: isDevelopment ? process.env.EXPRESS_HOST_LOCAL as string : process.env.EXPRESS_HOST_REMOTE as string
  },
  db: {
    host: isDevelopment ? process.env.DB_HOST_LOCAL : process.env.DB_HOST_REMOTE,
    user: isDevelopment ? process.env.DB_USER_LOCAL : process.env.DB_USER_REMOTE,
    database: isDevelopment ? process.env.DB_DATABASE_LOCAL : process.env.DB_DATABASE_REMOTE,
    password: isDevelopment ? process.env.DB_PW_LOCAL : process.env.EXPRESS_PORT_REMOTE
  }
}
export default config;