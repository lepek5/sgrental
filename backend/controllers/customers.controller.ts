import { NextFunction, Request, Response } from "express";
import customerService from "../services/customer.service";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";

const customerController = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) throw new HtmlError(httpStatus.BAD_REQUEST,"Missing credentials");
    const { email, password } = req.body;
    if (!email) throw new HtmlError(httpStatus.BAD_REQUEST, "Missing email");
    if (!password) throw new HtmlError(httpStatus.BAD_REQUEST, "Missing password");
    try {

    } catch (err) {
      next(err);
    }
  },
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