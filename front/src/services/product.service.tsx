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
const addProduct = async (product: IProduct): Promise<IProduct> => {
  const result = await apiService.post("products", product);
  return result.data;
}

export default { addProduct, getAll };