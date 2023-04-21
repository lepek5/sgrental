import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const SaltRounds = 10
const Secret = process.env.SECRET || "lentaevaekalakukko";
const isDevelopment = process.env.NODE_ENV === "development";
console.error("###########")
console.error("###########")
console.error("###########")
console.error("VITTU", process.env.DB_PW_REMOTE)
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
    password: process.env.DB_PASSWORD
  },
  frontend: {
    host: isDevelopment ? process.env.FRONTEND_URI : process.env.FRONTEND_URI_REMOTE
  },
  utils: {
    generateRandomPassword: async () => (new Date().getTime()).toString(36),
    hashPassword: async (secret: string) => {
      const salt = await bcrypt.genSalt(SaltRounds);
      return await bcrypt.hash(secret, salt);
    },
    comparePassword: async (secret: string, hash: string) => {
      return await bcrypt.compare(secret, hash);
    },
    createToken: (user: any) => {
      return jwt.sign(user, Secret);
    },
    verifyToken: (token: string) => {
      return jwt.verify(token, Secret);
    }
  }
}
export default config;