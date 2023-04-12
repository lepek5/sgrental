import express from "express";
import ReservationController from "../controllers/reservation.controller";
const ReservationRoute = express.Router();
ReservationRoute.get("/", ReservationController.getAll)
ReservationRoute.post("/", ReservationController.createReservation);
export default ReservationRoute;