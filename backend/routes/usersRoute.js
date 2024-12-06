import express, { Router } from "express";
import { signup, login, getUser } from "../controllers/usersController.js";
import protect from "../middleware/authMiddleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

router.route("/").get(protect, getUser);

export default router;
