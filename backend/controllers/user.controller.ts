import { NextFunction, Request, Response } from "express";
import config from "../config";
import userService from "../services/user.service";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";
import { IRequest } from "../interfaces/IRequest";
import Customer from "../models/customer";

const login = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) throw new HtmlError(httpStatus.BAD_REQUEST, "Missing credentials");
  const { email, password } = req.body;
  try {
    const user = await userService.getByEmail(email);
    if (user) {
      const jsonUser = user.toJSON();
      const login = await config.utils.comparePassword(password, jsonUser.password);
      if (login) {
        const token = config.utils.createToken({ id: jsonUser.id, email: jsonUser.email });
        res.status(httpStatus.SUCCESS).json({
          code: 200,
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
}
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const result = await userService.createUser(body);
    res.status(httpStatus.CREATED).json({ "Account created": "ok" });
  } catch (err) {
    next(err);
  }
}
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getAll();
    if (!result) {
      throw new HtmlError(httpStatus.NOT_FOUND, "Failed to get users");
    }
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    next(err);
  }
}
const whoami = async (req: Request, res: Response, next: NextFunction) => {
  const { user } = req;
  if (!user) {
    res.status(httpStatus.NOT_FOUND).json({msg: "user not found", code: httpStatus.NOT_FOUND});
    return;
  }
  try {
    const tmp = await userService.getById(user.toJSON().id);
    const type = user instanceof Customer ? "customer" : "employee";
    res.status(httpStatus.SUCCESS).json({...user.toJSON(), email: tmp?.toJSON().email, type});
  } catch (err) {
    next(err);
  }
};

export default { login, createUser , getAll, whoami};