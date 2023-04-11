import ProductService from "../services/product.service";
import { ProductUI } from "../types/product.types";
import { Request, Response } from "express";

const ProductController = {
  getAll: async (_req: Request, res: Response) => {
    const result = await ProductService.getAll();
    console.log("fuk you", result);
    res.status(result.status).send(result);
  },
  addProduct: async (req: Request, res: Response) => {
    // BIGINT PARSE OPTIONS
    // JSON.stringify(obj, (_, v) => typeof v === 'bigint' ? v.toString() : v)
    const parser = (_: any, v: any) => typeof v === "bigint" ? v.toString() : v;
    const { body } = req;
    const result = await ProductService.addProduct(body);
    const parsed = JSON.stringify(result, parser);
    res.json(JSON.parse(parsed));
  }
};

export default ProductController;