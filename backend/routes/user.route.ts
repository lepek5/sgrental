import express from "express";
import userController from "../controllers/user.controller";
const router = express.Router();
router.post("/", userController.createUser);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
export { router as userRouter };