import axios from "axios";
import Config from "../config";
import { IProduct } from "../interfaces/IProduct";

const BASEURL = Config.API.URI + "products";

const getAll = async (): Promise<IProduct | any> => {
  const result = await axios.get(BASEURL);
  return result.data;
}
const addProduct = async (product: IProduct) => {
  const result = await axios.post(BASEURL, product);
  return result.data;
}

export default { addProduct, getAll };