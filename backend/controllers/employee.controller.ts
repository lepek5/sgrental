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
const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const result = await employeeService.createEmployee(body);
    if (!result) throw new HtmlError(500, "Error creating new employee");
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    throw err;
  }
}
export default {
  getAll,
  createEmployee
}