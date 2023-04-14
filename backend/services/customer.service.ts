import Customer from "../models/customer";
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
    try {
      const customer = await Customer.create(payload);
      return customer;
    } catch (err: unknown) {
      throw err;
    } finally {
    }
  },
  getCustomerById: async () => {

  }
}
export default customerService;