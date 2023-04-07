import ProductService from "../services/product.service";
import { ProductUI } from "../types/product.types";
import { Request, Response } from "express";


const ProductController = {
  getAll: async (_req: Request, res: Response) => {
    const result: ProductUI = await ProductService.getAll();
    res.status(200).send("ok");
  },
  get: (_req: Request, res: Response) => {
    const result = ProductService.get();
    res.json(result);
  }
};

export default ProductController;