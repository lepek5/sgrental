import { NextFunction, Request, Response } from "express";
import { httpStatus } from "../utils/httpStatus";

const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  console.error("###############");
  console.error(err.message);
  console.error("###############");
  res.status(httpStatus.INTERNAL).json({
    "Error happened :(": "Im on it already..."
  })
}

export default errorHandler;