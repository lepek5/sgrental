import express from "express";
import employeeController from "../controllers/employee.controller";
const router = express.Router();

router.get("/", employeeController.getAll);

export { router as employeeRouter };