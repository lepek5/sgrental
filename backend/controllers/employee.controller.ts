import { NextFunction, Request, Response } from "express";
import employeeService from "../services/employee.service";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await employeeService.getAll();
    if (!result) throw new HtmlError(httpStatus.NOT_FOUND, "Error fetching employees");
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    throw err;
  }
};
export default {
  getAll
}