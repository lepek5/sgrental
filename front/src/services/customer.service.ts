import { AxiosError } from "axios";
import { ICustomer } from "../interfaces/ICustomer";
import apiService from "./api.service";
const getAll = async () => {
  try {
    const result = await apiService.get("customers");
    return result.data;
  } catch (err) {
    throw err.response.data;
  }
}
const createCustomer = async (payload: ICustomer) => {
  try {
    const result = await apiService.post("customers", payload);
    return result.data;
  } catch (err) {
    throw err.response.data;
  }
};
const updateCustomer = async (payload: any) => {
  try {
    const result = await apiService.put("customers", payload);
    return result.data;
  } catch (err) {
    throw err.response.data;
  }
}
export default { getAll, createCustomer, updateCustomer };