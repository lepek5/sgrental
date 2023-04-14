import express from "express";
import customerController from "../controllers/customers.controller";
import customerService from "../services/customer.service";
const router = express.Router();

router.get("/", customerController.getAll);
router.post("/", customerController.createCustomer);
export { router as customerRouter };