import config from "../config";
import Customer from "../models/customer";
import Employee from "../models/employee"
import User from "../models/user";
import { httpStatus } from "../utils/httpStatus";

const getAll = async () => {
  try {
    const result = await Employee.findAll();
    return result;
  } catch (err) {
    throw err;
  }
}
const createEmployee = async (payload: any) => {
  const { email, ...employee } = payload;
  const password = await config.utils.generateRandomPassword();
  const hash = await config.utils.hashPassword(password);
  try {
    const user = await User.create({email, password: hash});
    if (!user) {
      throw Error("Error creating new account");
    }
    const { email: userEmail, id: userId } = user.toJSON();
    const result = await Employee.create({...employee, userId});
    if (!result) throw Error("Error creating new employee account");
    const response = {
      data: {
        email: userEmail,
        password: password 
      },
      status: httpStatus.CREATED
    }
    return response;
  } catch (err) {
    throw err;
  }
}
export default {
  getAll,
  createEmployee
}