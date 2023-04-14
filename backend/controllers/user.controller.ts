import { NextFunction, Request, Response } from "express";
import config from "../config";
import userService from "../services/user.service";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";

const userController = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) throw new HtmlError(httpStatus.BAD_REQUEST, "Missing credentials");
    const { email, password } = req.body;
    try {
      const user = await userService.getByEmail(email);
      if (user) {
        const jsonUser = user.toJSON();
        const login = await config.utils.comparePassword(password, jsonUser.password);
        if (login) {
          const token = config.utils.createToken({ id: jsonUser.id, email: jsonUser.email });
          res.cookie("token", token, { httpOnly: true });
          res.status(httpStatus.SUCCESS).json({
            id: jsonUser.id,
            email: jsonUser.email,
            token
          })
          return;
        }
        throw new HtmlError(httpStatus.UNAUTHORIZED, "Wrong credentials");
      }
      throw new HtmlError(httpStatus.NOT_FOUND, "User not found");
    } catch (err) {
      next(err);
    }
  },
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      const result = await userService.createUser(body);
      res.status(httpStatus.CREATED).json({ "Account created": "ok" });
    } catch (err) {
      next(err);
    }
  },
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    console.log("Im awake at userController!");
    try {
      const result = await userService.getAll();
      res.status(httpStatus.SUCCESS).json(result);
    } catch (err) {
      next(err);
    }
  },
  getById: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const result = await userService.getById(id);
      res.status(httpStatus.SUCCESS).json(result);
    } catch (err) {
      next(err);
    }
  }
}
export default userController;