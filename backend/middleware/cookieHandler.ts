import { NextFunction, Request, Response } from "express";

const cookieHandler = async (req: Request, res: Response, next: NextFunction) => {
  req.cookies = req.headers.cookie;
  next();
}
export default cookieHandler;