import { Request, Response } from "express";

const errorHandler = (err: Error, req: Request, _res: Response) => {
  console.error("###############");
  console.error("Handlong error", err);
  console.error("###############");
}

export default errorHandler;