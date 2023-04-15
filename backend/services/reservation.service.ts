import Database from "../database";
import { IReservation } from "../interfaces/IReservation";
import Reservation from "../models/reservation";

const getAll = async () => {
  try {
    const result = await Reservation.findAll();
    return result;
  } catch (err) {
    throw err;
  }
};
const createReservation = async (payload: any): Promise<IReservation | any> => {};


export default {
  getAll,
  createReservation
}
