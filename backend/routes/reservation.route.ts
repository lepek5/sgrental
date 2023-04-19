import express from "express";
import ReservationController from "../controllers/reservation.controller";
import reservationController from "../controllers/reservation.controller";
const ReservationRoute = express.Router();
ReservationRoute.get("/", ReservationController.getAll)
ReservationRoute.post("/", ReservationController.createReservation);
ReservationRoute.get("/:id", reservationController.getById);
ReservationRoute.put("/:id", reservationController.updateReservation);
export default ReservationRoute;