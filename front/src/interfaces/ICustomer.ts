export interface ICustomer {
  id?: number,
  userId?: number,
  name: string,
  email: string,
  address: string,
  dateOfBirth: string,
  phone: string,
}
export interface ICustomerRegister extends ICustomer {
  password: string
}