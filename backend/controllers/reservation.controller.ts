import { IReservation } from "../interfaces/IReservation";
import reservationService from "../services/reservation.service";
import { Request, Response } from "express";

const createReservation = async (req: Request, res: Response) => {
  const { body } = req;
  const result = await reservationService.createReservation(body);
  console.log("Reservation controller", result);
}
const getAll = async (req: Request,res: Response) => {
  const result = await reservationService.getAll();
  res.json(result);
}
export default { createReservation, getAll };