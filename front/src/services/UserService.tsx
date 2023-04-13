import axios from "axios";
import { IUser } from "../interfaces/IUser";

const BASEURL = "http://localhost:13331/api/users";

const createUser = async (payload: any): Promise<IUser | any> => {
  console.log("payload", payload)
  const result = await axios.post(BASEURL, payload);
  console.log(result);
}
const getAll = async () => {
  const result = await axios.get(BASEURL);
  return result;
}
export default { createUser, getAll };