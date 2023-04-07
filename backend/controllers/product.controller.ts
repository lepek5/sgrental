import ProductService from "../services/product.service";
import { ProductUI } from "../types/product.types";
import { Request, Response } from "express";

const ProductController = {
  getAll: async (_req: Request, res: Response) => {
    const result = await ProductService.getAll();
    res.status(result.status).send(result);
  },
};

export default ProductController;