import { ILogin } from "../interfaces/ILogin";
import { IUser } from "../interfaces/IUser";
import apiService from "./api.service";
const createUser = async (payload: any): Promise<IUser | any> => {
  const result = await apiService.post("users", payload);
  return result.data;
}
const getAll = async () => {
  const result = await apiService.get("users");
  return result.data;
}
const getById = async (id: string) => {
  const result = await apiService.get("users/" + id );
  return result.data;
}
const login = async (credentials: ILogin) => {
  try {
    const login = await apiService.post("users/login", credentials);
    return login.data;
  } catch (err) {
    throw err;
  }
}
export default { createUser, getAll, getById, login };