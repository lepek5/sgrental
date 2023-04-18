import { ILogin } from "../interfaces/ILogin";
import { IUser } from "../interfaces/IUser";
import apiService from "./api.service";
import { ICustomer } from "../interfaces/ICustomer";

const createUser = async (payload: any): Promise<IUser | any> => {
  const result = await apiService.post("users", payload);
  return result.data;
}
const getAll = async () => {
  const result = await apiService.get("users");
  return result.data;
}
const getById = async (id: string) => {
  const result = await apiService.get("users/" + id);
  return result.data;
}
const login = async (credentials: ILogin) => {
  try {
    const login = await apiService.post("users/login", credentials);
    if (login.status === 200) {
      const { id: userId, token } = login.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      return {...login.data, status: 200};
    }
  } catch (err) {
    return err.response.data;
  }
}
const whoami = async () => {
  try {
    const result = await apiService.get("users/whoami");
    if (result.status === 200) return result.data;
  } catch (err) {
  }
}
export default { createUser, getAll, getById, login, whoami };