import axios from "axios";
import { IProduct } from "../interfaces/IProduct";

const BASEURL = "http://127.0.0.1:13331/api/products";

const getAll = async (): Promise<IProduct | any> => {
  const result = await axios.get(BASEURL);
  return result.data;
}
const addProduct = async (product: IProduct) => {
  const result = await axios.post(BASEURL, product);
  return result.data;
}

export default { addProduct, getAll };