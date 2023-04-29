import { IReservation } from "../interfaces/IReservation";
import reservationService from "../services/reservation.service";
import { NextFunction, Request, Response } from "express";
import { httpStatus } from "../utils/httpStatus";
import { HtmlError } from "../utils/customErrors";
import customerService from "../services/customer.service";

const createReservation = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const result = await reservationService.createReservation(body);
    return res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    next(err);
  }

}
const getAll = async (req: Request,res: Response) => {
  const result = await reservationService.getAll();
  res.json(result);
};
const getById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) throw new HtmlError(httpStatus.BAD_REQUEST, "Id is required to fetch resrevation");
  try {
    const result = await reservationService.getById(id);
    if (!result) throw new HtmlError(httpStatus.NOT_FOUND, "Reservation not found");
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    next(err);
  }
};
const updateReservation = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const result = await reservationService.updateReservation(body);
    res.status(httpStatus.SUCCESS).json(result);
  } catch (err) {
    next(err);
  }
};
const getByCustomer = async (req: Request, res: Response, next: NextFunction) => {
  const { user } = req;
  const { id } = req.params;
  console.log("Controller", user);
  if (!user) return res.status(httpStatus.NOT_FOUND).json({error: "User not found"});
  try {
    const customer = await customerService.getCustomerByUserId(user.toJSON().id);
    if (!customer) return res.status(httpStatus.NOT_FOUND).json({error: "Customer not found"});
    const reservations = await reservationService.getByCustomerId(customer.toJSON().id);
    if (!reservations) return res.status(httpStatus.NOT_FOUND).json({error: "No reservations found"});
    return res.status(httpStatus.SUCCESS).json(reservations);
  } catch (err) {
    next(err);
  }
}
export default { createReservation, getAll, getById, updateReservation, getByCustomer };