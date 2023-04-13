import Product from "../models/product";
import { ProductDB, ProductUI } from "../types/product.types";

const ProductService = {
  getAll: async () => {
    try {
      const result = await Product.findAll();
      return result;
    } catch (error: unknown) {
      throw error;
    }
  },
  getById: async (id: number): Promise<ProductDB | any> => {
    try {
      const result = await Product.findByPk(id);
      return result;
    } catch (error: unknown) {
      return error;
    }
  },
  addProduct: async (product: any): Promise<ProductDB | any> => {
    try {
      const result = await Product.create(product);
      return result;
    } catch (err) {
      throw err;
    }
  }
};
export default ProductService;