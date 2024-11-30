import express from "express";
import {
  getSingleProduct,
  getAllProducts,
  postNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = express.Router();

router.get("/:id", getSingleProduct);

router.get("/", getAllProducts);

router.post("/", postNewProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
