import { IReservation } from "../interfaces/reservation";
import reservationService from "../services/reservation.service";
import { Request, Response } from "express";

const createReservation = async (req: Request, res: Response) => {
  const { body } = req;
  const result = await reservationService.createReservation(body);
  res.json(result);
}
const getAll = async (req: Request,res: Response) => {
  const result = await reservationService.getAll();
  res.json(result);
}
export default { createReservation, getAll };