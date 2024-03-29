import Database from "../database";
import { IReservation } from "../interfaces/IReservation";
import { Product } from "../models";
import Customer from "../models/customer";
import Reservation from "../models/reservation";
import User from "../models/user";
import { HtmlError } from "../utils/customErrors";
import { httpStatus } from "../utils/httpStatus";
import { Op } from "sequelize";


const getAll = async (): Promise<IReservation | any> => {
  try {
    const result = await Reservation.findAll();
    return result;
  } catch (err) {
    throw err;
  }
};
const createReservation = async (payload: IReservation): Promise<IReservation | any> => {
  try {
    const result = await Reservation.create({...payload});
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
        attributes: ["user_id", "name"],
        include: [{
          model: User,
          where: {
            id: {[Op.col]: "customer.user_id"}
          },
          attributes: ["id", "email"]
        }]
      }]
    });
    if (!result) throw new HtmlError(httpStatus.NOT_FOUND, "Reservation not found");
    return result;
  } catch (err) {
    throw err;
  }
};

const updateReservation = async (payload: any) => {
  try {
    const res = await Reservation.update(payload, {
      where: {
        id: payload.id
      }
    });
    return res;
  } catch (err) {
    throw err;
  }
};
const getByCustomerId = async (id: string) => {
  try {
    const reservations = await Reservation.findAll({
      nest: true,
      where: {
        customerId: id
      },
      attributes: ["startAt", "endAt", "completed", "confirmed"],
      include: [{
        model: Product,
        attributes: ["title", "price", "id"]
      }]
      
    });
    return reservations;
  } catch (err) {
    throw err;
  }
}

export default {
  getAll,
  createReservation,
  getById,
  updateReservation,
  getByCustomerId
}
