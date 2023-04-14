import config from "../config";
import Customer from "../models/customer";
import User from "../models/user";
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
    const hash = await config.utils.generateRandomPassword();
    const password = hash.substring(0,10);
    try {
      const user = await User.create({email, password});
      if (!user) {
        throw Error("Error creating new account");
      }
      const result = await Customer.create({customer, userId: user.get("id")});
      if (!result) throw Error("Error creating new customer account");
      return result;
    } catch (err) {
      throw err;
    }
  },
  getCustomerById: async () => {

  }
}
export default customerService;