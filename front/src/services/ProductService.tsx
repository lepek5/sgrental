import axios from "axios";
import { IProductDB, IProductUI } from "../interfaces/IProduct";

const BASEURL = "http://127.0.0.1:13331/api/products";

const getAll = async () => {
  const result = await axios.get(BASEURL);
  return result;
}
const addProduct = async (product: IProductDB) => {
  const result = await axios.post(BASEURL, product);
  console.log("res", result)
}

export default { addProduct, getAll };