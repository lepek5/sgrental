import customerService from "../services/customer.service"
import employeeService from "../services/employee.service";

const createUsers = async () => {
  const customer = await customerService.createCustomer({
    name: "Käyttäjä",
    email: "user",
    address: "Osoite",
    phone: "715517",
    date_of_birth: "06-06-1666",
    password: "sala"
  });
  const employee = await employeeService.createEmployee({
    name: "Työntekijä",
    email: "employee",
    phone: "0700 12341234",
    password: "sala"
  });
  console.log("Users created.");
}
export default createUsers;