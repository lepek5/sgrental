import { NextFunction, Request, Response } from "express";
import customerService from "../services/customer.service";

const customerController = {
  getAll: async (req: Request, res: Response, next: NextFunction)=> {
    try {
      const result = await customerService.getAll();
      return result;
    } catch (err) {
      next(err);
    }
  },
  createCustomer: async (req: Request, res: Response, next: NextFunction)=> {
    const { body } = req;
    try {
      const result = await customerService.createCustomer(body);
      return result;
    } catch (err) {
      next(err);
    }
  }
};
export default customerController;