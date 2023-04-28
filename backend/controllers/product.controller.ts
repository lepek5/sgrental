import ProductService from "../services/product.service";
import { NextFunction, Request, Response } from "express";
import { httpStatus } from "../utils/httpStatus";
import Employee from "../models/employee";
import { HtmlError } from "../utils/customErrors";
const getAll = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAll();
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    throw err;
  }
};
const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { body, user } = req;
  if (!(user instanceof Employee)) {
    res.status(httpStatus.UNAUTHORIZED).json({ error: "Unauthorized", code: httpStatus.UNAUTHORIZED });
    return;
  }
  try {
    const result = await ProductService.createProduct(body);
    res.status(httpStatus.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};
const getById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) throw new HtmlError(httpStatus.BAD_REQUEST, "Id is required");
  try {
    const result = await ProductService.getById(id);
    if (!result) throw new HtmlError(httpStatus.NOT_FOUND, "Could not find product " + id);
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    next(err);
  }
}
export default { getAll, addProduct, getById };