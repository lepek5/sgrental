import Database from "../database";
import { IReservation } from "../interfaces/IReservation";
import Reservation from "../models/reservation";
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


export default {
  getAll,
  createReservation
}
