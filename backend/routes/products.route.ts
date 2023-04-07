import express from "express";
import ProductController from "../controllers/product.controller";
const ProductsRouter = express.Router();
ProductsRouter.get("/", ProductController.getAll);
export default ProductsRouter;