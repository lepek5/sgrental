import express from "express";
import ProductsRouter from "./products.route";
import ReservationRoute from "./reservation.route";
const Api = express.Router();
Api.use("/products", ProductsRouter);
Api.use("/reservations", ReservationRoute);
export default Api;