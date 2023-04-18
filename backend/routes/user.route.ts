import express from "express";
import userController from "../controllers/user.controller";
const router = express.Router();
router.post("/", userController.createUser);
router.get("/", userController.getAll);
router.post("/login", userController.login);
router.get("/whoami", userController.whoami);
export { router as userRouter };