import asyncHandler from "express-async-handler";
import Product from "../models/productsModel.js";
import mongoose from "mongoose";

//@disc  get single product
//@route GET /api/products/:id
export const getSingleProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findOne({ _id: productId });
  if (product) {
    res.status(200).json(product);
  } else {
    const error = new Error("Post " + productId + " not found");
    error.status = 404;
    return next(error);
  }
});

//@disc  get all product or with limit throug query param
//@route GET /api/products/
export const getAllProducts = asyncHandler(async (req, res, next) => {
  const limit = parseInt(req.query.limit);
  const products = await Product.find({ userId: req.userId }).limit(limit);
  res.status(200).json(products);
});

//@disc  post new product
//@route POST /api/products/
export const postNewProduct = asyncHandler(async (req, res, next) => {
  if (req.body.name && req.body.category && req.body.price) {
    const newProduct = await Product.create({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      userId: req.userId,
    });
    res.status(200).json(newProduct);
  } else {
    const error = new Error("Name,category,price is required");
    error.status = 404;
    return next(error);
  }
});

//@disc  put new product
//@route PUT /api/products/
export const updateProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    const error = new Error("Product not found");
    error.status = 404;
    return next(error);
  }
  if (product.userId != req.userId) {
    const error = new Error("User not authorized");
    error.status = 404;
    return next(error);
  }

  const updatedProduct = await Product.findOneAndUpdate(
    { _id: productId },
    req.body,
    { new: true, runValidators: true },
  );
  if (updatedProduct) {
    res.status(200).json(updatedProduct);
  }
});

//@disc  delete product
//@route DELETE /api/products/
export const deleteProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    const error = new Error("Product not found");
    error.status = 404;
    return next(error);
  }
  if (product.userId != req.userId) {
    const error = new Error("User not authorized");
    error.status = 404;
    return next(error);
  }

  const result = await Product.deleteOne({ _id: productId });

  if (result.deletedCount === 1) {
    const products = await Product.find({ userId: req.userId });
    res.status(200).json({ success: true, message: productId, data: products });
  } else {
    const error = new Error("product not found");
    error.status = 404;
    error.data = productId;
    return next(error);
  }
});
