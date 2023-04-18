import ProductService from "../services/product.service";
import { ProductUI } from "../types/product.types";
import { Request, Response } from "express";
import { httpStatus } from "../utils/httpStatus";
import categoryService from "../services/category.service";
import { HtmlError } from "../utils/customErrors";
import { IRequest } from "../interfaces/IRequest";
import Customer from "../models/customer";
import Employee from "../models/employee";

const ProductController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const result = await ProductService.getAll();
      res.status(httpStatus.SUCCESS).json(result);
    } catch (err) {
      throw err;
    }
  },
  addProduct: async (req: IRequest, res: Response) => {
    const { body, user } = req;
    if (!(user instanceof Employee)) {
      res.status(httpStatus.UNAUTHORIZED).json({ error: "Unauthorized", code: httpStatus.UNAUTHORIZED });
      return;
    }
    try {
      const result = await ProductService.addProduct(body);
      res.status(httpStatus.CREATED).json(result);
    } catch (err) {
      throw (err);
    }
  }
};

export default ProductController;