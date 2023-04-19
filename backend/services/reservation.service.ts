import Database from "../database";
import { IReservation } from "../interfaces/IReservation";
import { Product } from "../models";
import Customer from "../models/customer";
import Reservation from "../models/reservation";
import User from "../models/user";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";

const getAll = async () => {
  try {
    const result = await Reservation.findAll();
    return result;
  } catch (err) {
    throw err;
  }
};
const createReservation = async (payload: any): Promise<IReservation | any> => {
  try {
    const result = await Reservation.create(payload);
    if (result) return result;
  } catch (err) {
    throw err;
  }
};
const getById = async (id: string) => {
  try {
    const result = await Reservation.findByPk(id, {
      nest: true,
      include: [{
        model: Product
      },
      {
        model: Customer,
        include: [{
          model: User,
          attributes: ["id", "email"]
        }]
      }]
    });
    if (!result) throw new HtmlError(httpStatus.NOT_FOUND, "Reservation not found");
    return result;
  } catch (err) {
    throw err;
  }
}


export default {
  getAll,
  createReservation,
  getById
}
