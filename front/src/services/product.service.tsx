import Config from "../config";
import { ICategory } from "../interfaces/ICategory";
import { IProduct } from "../interfaces/IProduct";
import apiService from "./api.service";

const parseCategoriesToArray = (arr: any) => arr.map((c: ICategory) => c.category);

const getAll = async (): Promise<IProduct[]> => {
  const result = await apiService.get("products");
  var products: IProduct[] = result.data;
  products.forEach((prod: IProduct) => {
    prod.categories = parseCategoriesToArray(prod.categories);
  });
  return products;
}
const getAllCategories = async () => {
  const categories = await apiService.get("categories");
  return categories.data;
};
const createProduct = async (product: IProduct): Promise<IProduct> => {
  const result = await apiService.post("products", product);
  return result.data;
};
const getById = async (id: string) => {
  const result = await apiService.get("products/" + id);
  const product = {...result.data, categories: parseCategoriesToArray(result.data.categories)};
  return product;
}

export default { createProduct, getAll, getById, getAllCategories };