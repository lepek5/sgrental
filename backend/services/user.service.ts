import config from "../config";
import Database from "../database";
import User from "../models/user";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";
import sql from "../utils/sql";
const TABLE = "users";
const userService = {
  login: async (email: string, password: string) => {
    try {
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        throw new HtmlError(httpStatus.NOT_FOUND, "User not found");
      }
      const login = await config.utils.comparePassword(password, user.toJSON().password);
      if (!login) {
        throw new HtmlError(httpStatus.UNAUTHORIZED, "Invalid credentials on login")
      }
      return user;
    } catch (err) {
      throw err;
    }
  },
  createUser: async (payload: any) => {
    try {
      const result = await User.create(payload);
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
  getByEmail: async (email: string) => {
    try {
      const result = await User.findOne({
        where: {
          email: email
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