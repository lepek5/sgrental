import { copyFile } from "fs";
import config from "../config";
import Customer from "../models/customer";
import User from "../models/user";
import { httpStatus } from "../utils/httpStatus";
const customerService = {
  getAll: async () => {
    try {
      const customers = await Customer.findAll();
      return customers;
    } catch (err) {
      throw err;
    }
  },
  createCustomer: async (payload: any) => {
    const { email, ...customer } = payload;
    const password = await config.utils.generateRandomPassword();
    const hash = await config.utils.hashPassword(password);
    try {
      const user = await User.create({email, password: hash});
      if (!user) {
        throw Error("Error creating new account");
      }
      console.log(user.toJSON(), "uesr","hash", hash);
      const result = await Customer.create({...customer, userId: user.toJSON().id});
      if (!result) throw Error("Error creating new customer account");
      const response = {
        data: {
          email: user.toJSON().email,
          password: password 
        },
        status: httpStatus.CREATED
      }
      console.log("Final", response);
      return response;
    } catch (err) {
      throw err;
    }
  },
  getCustomerById: async () => {

  }
}
export default customerService;