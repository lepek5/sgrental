import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import customerService from "../services/customer.service";
import userService from "../services/user.service";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";
import userController from "./user.controller";

const customerController = {
  getAll: async (req: Request, res: Response, next: NextFunction)=> {
    try {
      const result = await customerService.getAll();
      res.status(result.status).json(result);
    } catch (err) {
      next(err);
    }
  },
  createCustomer: async (req: Request, res: Response, next: NextFunction)=> {
    const { body } = req;
    try {
      const result = await customerService.createCustomer(body);
      res.status(result.status).json(result);
    } catch (err) {
      next(err);
    }
  }
};
export default customerController;