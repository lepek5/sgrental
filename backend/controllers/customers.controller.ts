import { NextFunction, Request, Response } from "express";
import customerService from "../services/customer.service";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";
import { IRequest } from "../interfaces/IRequest";
const getAll = async (req: Request, res: Response, next: NextFunction)=> {
  try {
    const result = await customerService.getAll();
    if (!result) throw new HtmlError(httpStatus.NOT_FOUND, "Error fetching customers");
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    next(err);
  }
};
const createCustomer = async (req: Request, res: Response, next: NextFunction)=> {
  const { body } = req;
  try {
    const result = await customerService.createCustomer(body);
    res.status(result.status).json(result);
  } catch (err) {
    next(err);
  }
};
const updateCustomer = async (req: Request, res: Response, next: NextFunction ) => {
  const { user, body } = req;
  try {
    const result = await customerService.updateCustomer(body);
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    throw err;
  }
};
export default { getAll, createCustomer, updateCustomer };