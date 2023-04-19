import { Request, Response, NextFunction } from "express";
import config from "../config";
import { IRequest } from "../interfaces/IRequest";
import { IUserVerified } from "../interfaces/IUser";
import userService from "../services/user.service";
import customerService from "../services/customer.service";
import employeeService from "../services/employee.service";

const getToken = (req: any) => {
  var auth = req.headers.authorization;
  if (auth) {
    return auth.split("Bearer ")[1];
  }
  return false;
}

const authHandler = async (req: Request, res: Response, next: NextFunction) => {
  const token = getToken(req);
  if (token) {
    const decoded = config.utils.verifyToken(token) as IUserVerified;
    if (decoded) {
      const user = await userService.getByEmail(decoded.email);
      if (user) {
        try {
          const customer = await customerService.getCustomerByUserId(user.toJSON().id);
          if (customer) {
            req.user = customer;
          } else {
            const employee = await employeeService.getEmployeeByUserId(user.toJSON().id);
            if (employee) req.user = employee;
          }
        } catch (err) {
          throw err;
        }
      }
    }
  }
  next();
};
export default authHandler;