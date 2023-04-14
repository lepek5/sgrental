import axios from "axios";
import Config from "../config";
import { ICustomer } from "../interfaces/ICustomer";

const BaseUrl = Config.API.URI + "customers";

const customerService = {
  getAll: async () => {
    try {
      const result = await axios.get(BaseUrl);
      return result.data;
    } catch (err) {
      throw err;
    }
  },
  createCustomer: async (payload: ICustomer) => {
    try {
      const result = await axios.post(BaseUrl, payload);
      return result.data;
    } catch (err) {
      throw err
    }
  },
};
export default customerService;