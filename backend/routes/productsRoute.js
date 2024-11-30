import express from "express";
import {
  getSingleProduct,
  getAllProducts,
  postNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = express.Router();

router.route("/").get(getAllProducts).post(postNewProduct);

router
  .route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
