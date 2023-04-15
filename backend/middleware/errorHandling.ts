import { NextFunction, Request, Response } from "express";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";

const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  console.error("###############");
  console.error(err.message);
  console.error(err.name);
  console.error("Type", typeof err);
  console.error("###############");
  var error = {message: "Jaa a, ei mitään käryä :D"+". Oisko toi " + err.message, status: httpStatus.INTERNAL};
  if (err instanceof HtmlError) {
    var e = err;
    error = {
      message: e.message,
      status: e.status
    }
  }
  if (err.name === "SequelizeUniqueConstraintError") {
    error = {
      message: "Value must be unique",
      status: httpStatus.CONFLICT
    };
  }
  res.status(error.status).json(error);
}

export default errorHandler;