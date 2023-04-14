import { Request, Response, NextFunction } from "express";
import config from "../config";
import { IRequest } from "../interfaces/IRequest";
import { IUserVerified } from "../interfaces/IUser";
import userService from "../services/user.service";

const authHandler = async (req: IRequest, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (token) {
    const decoded = config.utils.verifyToken(token) as IUserVerified;
    if (decoded) {
      const user = await userService.getByEmail(decoded.email);
      if (user) {
        req.user = user;
        req.userJSON = user.toJSON();
      }
    }
  }
  next();
};
export default authHandler;