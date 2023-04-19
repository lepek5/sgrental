import { copyFile } from "fs";
import config from "../config";
import Customer from "../models/customer";
import User from "../models/user";
import { httpStatus } from "../utils/httpStatus";
import { ICustomer } from "../interfaces/ICustomer";
import { HtmlError } from "../utils/customErrors";

const getAll = async () => {
  try {
    const customers = await Customer.findAll();
    return customers;
  } catch (err) {
    throw err;
  }
};
const createCustomer = async (payload: any) => {
  const { email, ...customer } = payload;
  const password = customer.password ? customer.password : await config.utils.generateRandomPassword();
  const hash = await config.utils.hashPassword(password);
  try {
    const user = await User.create({email, password: hash});
    if (!user) {
      throw Error("Error creating new account");
    }
    const result = await Customer.create({...customer, userId: user.toJSON().id});
    if (!result) throw Error("Error creating new customer account");
    const response = {
      data: {
        email: user.toJSON().email,
        password: password 
      },
      status: httpStatus.CREATED
    }
    return response;
  } catch (err) {
    throw err;
  }
};
const getCustomerByUserId = async (userId: string) => {
  try {
    const result = await Customer.findOne({
      where: {
        userId: userId
      }
    })
    return result;
  } catch (err) {
    throw err;
  }
};
const updateCustomer = async (payload: ICustomer) => {
  try {
    const result = await Customer.update(payload, {
      where: {
        id: payload.id
      }
    });
    if (result) {
      return result;
    } else {
      console.error("Couldn't update customer");
    }
  } catch (err) {
    throw err;
  }
};
export default { getAll, getCustomerByUserId, createCustomer, updateCustomer };