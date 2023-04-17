import { ProductDB } from "../types/product.types";
import categoryService from "./category.service";
import { Product, Category, ProductDetail } from "../models";
const ProductService = {
  getAll: async () => {
    try {
      const result = await Product.findAll({
        nest: true,
        include: [{
          model: Category,
          attributes: {
            exclude: ["id"]
          },
          through: {attributes: []}
        }],
      });
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
  addProduct: async (payload: any): Promise<ProductDB | any> => {
    const { categories, ...product } = payload;
    try {
      const result = await Product.create(product);
      if (result) {
        const { id: productId } = result.toJSON();
        categories.forEach(async (value: any) => {
          try {
            const cat = await categoryService.createCategory(value);
            const { id: categoryId } = cat;
            const result = await ProductDetail.create({
              productId, categoryId
            });
            if (!result) throw new Error("Error pairing product and category");
          } catch (err) {
            throw err;
          }
        })
      }
      return result.toJSON();
    } catch (err) {
      throw err;
    }
  }
};
export default ProductService;