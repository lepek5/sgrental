import express from "express";
import userController from "../controllers/user.controller";
const router = express.Router();
router.post("/", userController.createUser);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/login", userController.login);
export { router as userRouter };