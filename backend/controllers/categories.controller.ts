import { NextFunction, Request, Response } from "express";
import categoryService from "../services/category.service";
import { httpStatus } from "../utils/httpStatus";

const getAll = async (req:Request ,res: Response, next: NextFunction) => {
  try {
    const result = await categoryService.getAll();
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    next(err);
  }
}
export default { getAll };