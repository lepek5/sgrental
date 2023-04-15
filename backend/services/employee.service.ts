import Employee from "../models/employee"

const getAll = async () => {
  try {
    const result = await Employee.findAll();
    return result;
  } catch (err) {
    throw err;
  }
}
const createEmployee = async (payload: any) => {
  try {
    const result = await Employee.create(payload);
    return result;
  } catch (err) {
    throw err;
  }
}
export default {
  getAll,
  createEmployee
}