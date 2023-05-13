import express from "express";
import categoryController from "../controllers/categories.controller";
const router = express.Router();
router.get("/", categoryController.getAll);
export { router as categoryRouter };