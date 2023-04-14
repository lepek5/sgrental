import { NextFunction, Request, Response } from "express";
import { httpStatus } from "../utils/httpStatus";

const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  console.error("###############");
  console.error(err.message);
  console.error(err.name);
  console.error("Type", typeof err);
  console.error("###############");
  var error = {message: "", status: 500};
  switch(err.name) {
    case "SequelizeUniqueConstraintError":
      error = {
        message: "Value must be unique",
        status: httpStatus.CONFLICT
      };
      break;
    default:
      error = { message: "Jaa a, ei mitään käryä :D"+". Oisko toi " + err.message, status: httpStatus.INTERNAL };
  }
  res.status(error.status).json(error);
}

export default errorHandler;