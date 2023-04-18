import customerService from "../services/customer.service"

const getCustomers = async () => {
  return await customerService.getAll();
}
const createCustomer = async (payload: any) => {
  return await customerService.createCustomer(payload);
}

export default {
  getCustomers,
  createCustomer
}