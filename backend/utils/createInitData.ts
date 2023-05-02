import { ICustomer } from "../interfaces/ICustomer";
import { IProduct } from "../interfaces/IProduct";
import { IReservation } from "../interfaces/IReservation";
import customerService from "../services/customer.service"
import employeeService from "../services/employee.service";
import productService from "../services/product.service";
import reservationService from "../services/reservation.service";
import userService from "../services/user.service";

const createUsers = async () => {
  const users = await userService.getAll();
  if (users.length < 1 || !users) {
    const customer1 = await customerService.createCustomer({
      name: "Käyttäjä Yksi",
      email: "user",
      address: "Käyttäjänkuja 1",
      phone: "015155155",
      date_of_birth: "1956-04-20",
      password: "sala"
    });
    const customer2 = await customerService.createCustomer({
      name: "Käyttäjä Kaksi",
      email: "user2",
      address: "Käyttäjänkuja 2",
      phone: "015511511",
      date_of_birth: "1992-02-14",
      password: "sala"
    });
    const employee1 = await employeeService.createEmployee({
      name: "Työntekijä Yksi",
      email: "employee",
      phone: "0700 12341234",
      password: "sala"
    });
    const employee2 = await employeeService.createEmployee({
      name: "Työntekijä Kaksi",
      email: "employee2",
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
const createReservations = async () => {
  const reservations: IReservation[] = await reservationService.getAll();
  if (reservations.length < 1 || !reservations) {
    const reservation1: IReservation = await reservationService.createReservation({
      productId: 2,
      customerId: 1,
      employeeId: null,
      startAt: formatDate(new Date(getDateAfterDays(2))),
      endAt: formatDate(new Date(getDateAfterDays(7))),
      confirmed: false,
      completed: false
    });
    const reservation2: IReservation = await reservationService.createReservation({
      productId: 3,
      customerId: 2,
      employeeId: 1,
      startAt: formatDate(new Date(getDateAfterDays(2))),
      endAt: formatDate(new Date(getDateAfterDays(6))),
      confirmed: true,
      completed: false
    });
    console.log("Initial reservations created.");
  }
};
const formatDate = (date: Date): string => {
  /**
   * Return date as mm-dd-yyyy
   */
  //let date = new Date(payload)
  let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  let month = 1 + date.getMonth() > 9 ? 1 + date.getMonth() : `0${1 + date.getMonth()}`;
  let year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
const getDateAfterDays = (days: number) => {
  /**
   * Return milliseconds based on days after today
   */
  const date = Date.now();
  const SECONDS_IN_DAY = 1000*60*60*24;
  return date + (SECONDS_IN_DAY * days);
}
export { createUsers, createProducts, createReservations };