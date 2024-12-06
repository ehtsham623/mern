import express, { Router } from "express";
import {
  getSingleProduct,
  getAllProducts,
  postNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";
import protect from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").get(protect, getAllProducts).post(protect, postNewProduct);

router
  .route("/:id")
  .get(protect, getSingleProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

export default router;
