import { ICustomer } from "../interfaces/ICustomer";
import { IProduct } from "../interfaces/IProduct";
import customerService from "../services/customer.service"
import employeeService from "../services/employee.service";
import productService from "../services/product.service";
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
const createProducts = async () => {
  const products: IProduct[] = await productService.getAll();
  if (products.length < 1 || !products) {
    const product1: IProduct = await productService.createProduct({
      title: "Pesäpallomaila",
      description: "Alumiinimaila, käytetty Luopioisten Lujan 15-vuotis juhlaottelussa",
      price: 25,
      categories: ["pesä", "pallo", "maila", "luopioisten", "luja"]
    });
    const product2: IProduct = await productService.createProduct({
      title: "Potkulauta",
      description: "Potkulauta jota on käytetty Paluu Tulevaisuuteen elokuvassa!",
      price: 150,
      categories: ["potkulauta", "paluu", "tulevaisuuteen"]
    });
    const product3: IProduct = await productService.createProduct({
      title: "SUP-lauta",
      description: "Vuoden 2020 malli. Väri keltainen.",
      price: 25,
      categories: ["SUP", "lauta", "keltainen"]
    });
    const product4: IProduct = await productService.createProduct({
      title: "Polkupyörä",
      description: "Yksivaihteinen polkupyörä kultaiselta kuusikymmentä luvulta. Väri sininen",
      price: 9,
      categories: ["polkupyörä", "sininen"]
    });
    const product5: IProduct = await productService.createProduct({
      title: "Sähköavusteinen polkupyörä",
      description: "Sähköavusteinen polkupyörä paksuilla renkailla. Voi käyttää hyvin myös rankemmassa maastossa",
      price: 15,
      categories: ["polkupyörä", "musta", "sähkö", "paksu", "rengas"]
    });
    console.log("Products created.")
  }
}
export { createUsers, createProducts };