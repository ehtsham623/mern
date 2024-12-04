import express, { Router } from "express";
import { signup, login, getUser } from "../controllers/usersController.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

router.route("/:id").get(getUser);

export default router;
