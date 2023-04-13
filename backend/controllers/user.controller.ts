import { Request, Response } from "express";
import userService from "../services/user.service";

const userController = {
  createUser: async (req: Request, res: Response) => {
    const { body } = req;
    console.log("body", body)
    try {
      console.log(body);
      const result = await userService.createUser(body);
      console.log("result", result)
    } catch (err) {
      console.error(err);
    }
  }
}
export default userController;