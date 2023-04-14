import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";

const userController = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) throw new HtmlError(httpStatus.BAD_REQUEST,"Missing credentials");
    const { email, password } = req.body;
    if (!email) throw new HtmlError(httpStatus.BAD_REQUEST, "Missing email");
    if (!password) throw new HtmlError(httpStatus.BAD_REQUEST, "Missing password");
    try {
      const result = await userService.login(email, password);
      console.log("Login Result", result)
      res.status(300).json(result);
    } catch (err) {
      next(err);
    }
  },
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    console.log("controlling..", body)
    try {
      const result = await userService.createUser(body);
      res.status(httpStatus.CREATED).json({"Account created": "ok"});
    } catch (err) {
      next(err);
    }
  },
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    console.log("Im awake at userController!");
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