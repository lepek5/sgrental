import Config from "../config";
import { IProduct } from "../interfaces/IProduct";
import apiService from "./api.service";
const getAll = async (): Promise<IProduct | any> => {
  const result = await apiService.get("products");
  return result.data;
}
const addProduct = async (product: IProduct) => {
  const result = await apiService.post("products", product);
  return result.data;
}

export default { addProduct, getAll };