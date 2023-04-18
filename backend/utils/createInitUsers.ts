import customerService from "../services/customer.service"
import employeeService from "../services/employee.service";
import userService from "../services/user.service";

const createUsers = async () => {
  const users = await userService.getAll();
  if (users.length < 1 || !users) {
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
}
export default createUsers;