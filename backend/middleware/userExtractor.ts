import { NextFunction, Request, Response } from "express";
import config from "../config";

const userExtractor = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const hash = await config.utils.hashPassword(password);
  } catch (err) {
    throw err;
  }
}