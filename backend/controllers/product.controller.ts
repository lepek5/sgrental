import ProductService from "../services/product.service";
import { ProductUI } from "../types/product.types";
import { Request, Response } from "express";
import { httpStatus } from "../utils/httpStatus";

const ProductController = {
  getAll: async (req: Request, res: Response) => {
    console.log("lol", req.headers);
    try {
      const result = await ProductService.getAll();
      console.log("Controller result", result);
      res.status(httpStatus.SUCCESS).json(result);
    } catch (err) {
      throw err;
    }
  },
  addProduct: async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const result = await ProductService.addProduct(body);
      res.status(httpStatus.CREATED).json(result.toJSON());
    } catch (err) {
      throw (err);
    }
  }
};

export default ProductController;