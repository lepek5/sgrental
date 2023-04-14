import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const SaltRounds = 10
const Secret = process.env.SECRET || "lentaevaekalakukko";
const isDevelopment = process.env.NODE_ENV === "development";
const config = {
  express: {
    port: isDevelopment ? Number(process.env.EXPRESS_PORT_LOCAL) : Number(process.env.EXPRESS_PORT_REMOTE),
    host: isDevelopment ? process.env.EXPRESS_HOST_LOCAL as string : process.env.EXPRESS_HOST_REMOTE as string
  },
  db: {
    host: isDevelopment ? process.env.DB_HOST_LOCAL : process.env.DB_HOST_REMOTE,
    port: isDevelopment ? Number(process.env.DB_PORT_LOCAL) : Number(process.env.DB_PORT_REMOTE),
    user: isDevelopment ? process.env.DB_USER_LOCAL : process.env.DB_USER_REMOTE,
    database: isDevelopment ? process.env.DB_DATABASE_LOCAL : process.env.DB_DATABASE_REMOTE,
    password: isDevelopment ? process.env.DB_PW_LOCAL : process.env.EXPRESS_PORT_REMOTE
  },
  frontend: {
    host: process.env.FRONTEND_URI
  },
  utils: {
    generateRandomPassword: async () => {
      const salt = await bcrypt.genSalt(SaltRounds);
      const firstRand = Math.floor((1+Math.random()) * 2000);
      const secondRand = Math.floor((1+Math.random()) * 2000);
      const secret = firstRand.toString() + secondRand.toString();
      const hash = await bcrypt.hash(secret, salt);
      return hash.substring(0,10);
    },
    hashPassword: async (secret: string) => {
      const salt = await bcrypt.genSalt(SaltRounds);
      return await bcrypt.hash(secret, salt);
    },
    comparePassword: async (secret: string, hash: string) => {
      return await bcrypt.compare(secret, hash);
    }
  }
}
export default config;