import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";
import { httpStatus } from "../utils/httpStatus";

const userController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      const result = await userService.createUser(body);
      res.status(httpStatus.CREATED).json({"Account created": "ok"});
    } catch (err) {
      next(err);
    }
  },
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await userService.getAll();
      console.log("Controller result", result)
      res.status(httpStatus.OK).json(result);
    } catch (err) {
      next(err);
    }
  },
  getById: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const result = await userService.getById(id);
      res.status(httpStatus.OK).json(result);
    } catch (err) {
      next(err);
    }
  }
}
export default userController;