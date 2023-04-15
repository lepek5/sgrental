import { NextFunction, Request, Response } from "express";
import config from "../config";
import User from "../models/user";

const userExtractor = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email: email
      }
    });
  } catch (err) {
    throw err;
  }
}