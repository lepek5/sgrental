import Database from "../database";
import User from "../models/user";
import sql from "../utils/sql";
const TABLE = "users";
const userService = {
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