import express from "express";
import ProductsRouter from "./products.route";
import ReservationRoute from "./reservation.route";
import { userRouter } from "./user.route";
const Api = express.Router();
Api.use("/products", ProductsRouter);
Api.use("/reservations", ReservationRoute);
Api.use("/users", userRouter);
export default Api;