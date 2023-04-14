import axios from "axios";
import Config from "../config";
import { ILogin } from "../interfaces/ILogin";
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
const login = async (credentials: any) => {
  try {
    const login = await axios.post(BASEURL+"/login", credentials);
    console.log(login);
    return login.data;
  } catch (err) {
    throw err;
  }
}
export default { createUser, getAll, getById, login };