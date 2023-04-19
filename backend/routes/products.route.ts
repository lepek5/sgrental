import express from "express";
import productController from "../controllers/product.controller";
const ProductsRouter = express.Router();
ProductsRouter.get("/", productController.getAll);
ProductsRouter.post("/", productController.addProduct);
ProductsRouter.get("/:id", productController.getById);
export default ProductsRouter;