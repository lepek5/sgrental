import Database from "../database";
import User from "../models/user";
import { httpStatus } from "../utils/httpStatus";
import sql from "../utils/sql";
const TABLE = "users";
const userService = {
  login: async (payload: any) => {
    const { email, password } = payload;
    try {
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        return { message: "User not found", status: httpStatus.NOT_FOUND }
      }
      console.log("user", user);
    } catch (err) {
      throw err;
    }
  },
  createUser: async (payload: any) => {
    try {
      console.log("start", payload)
      const result = await User.create(payload);
      console.log("result",result)
      return result.toJSON();
    } catch (err) {
      throw err;
    }
  },
  getAll: async () => {
    try {
      const result = await User.findAll({
        attributes: {
          exclude: ["password"]
        }
      });
      return result;
    } catch (err) {
      throw err;
    }
  },
  getById: async (id: string) => {
    try {
      const result = await User.findByPk(id);
      return result;
    } catch (err) {
      throw err;
    }
  }
};
export default userService;