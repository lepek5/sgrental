import express from "express";
import ProductsRouter from "./products.route";
const Api = express.Router();
Api.use("/products", ProductsRouter);
export default Api;