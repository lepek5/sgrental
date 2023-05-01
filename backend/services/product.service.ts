import categoryService from "./category.service";
import { Product, Category, ProductDetail } from "../models";
import { IProduct } from "../interfaces/IProduct";

const getAll = async (): Promise<IProduct[] | any> => {
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
};
const getById = async (id: string): Promise<any> => {
  try {
    const result = await Product.findByPk(id, {
      nest: true,
      include: [{
        model: Category,
        attributes: {
          exclude: ["id"]
        },
        through: {
          attributes: []
        }
      }]
    });
    return result;
  } catch (error: unknown) {
    return error;
  }
};
const createProduct = async (payload: IProduct): Promise<any> => {
  const { categories, ...product } = payload;
  try {
    const result = await Product.create(product);
    if (result) {
      const { id: productId } = result.toJSON();
      categories?.forEach(async (value: any) => {
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
export default {
  getAll,
  getById,
  createProduct
};