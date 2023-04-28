import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const SaltRounds = 10
const Secret = process.env.SECRET || "lentaevaekalakukko";
const config = {
  express: {
    port: Number(process.env.EXPRESS_PORT),
    host: process.env.EXPRESS_HOST as string
  },
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
  },
  frontend: {
    host: process.env.FRONTEND_URI
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