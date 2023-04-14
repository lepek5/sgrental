import axios from "axios";
import Config from "../config";
import { IUser } from "../interfaces/IUser";

const BASEURL = Config.API.URI + "users";

const createUser = async (payload: any): Promise<IUser | any> => {
  
  const result = await axios.post(BASEURL, payload);
  return result.data;
}
const getAll = async () => {
  console.log("BASE_URI", BASEURL)
  
  const result = await axios.get(BASEURL);
  console.log("Result", result);
  return result.data;
}
const getById = async (id: string) => {
  const result = await axios.get(BASEURL + "/" +id);
  return result.data;
}
export default { createUser, getAll, getById };