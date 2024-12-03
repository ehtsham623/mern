import asyncHandler from "express-async-handler";

///json example
let products = [
  { id: "1", name: "data1" },
  { id: "2", name: "data2" },
  { id: "3", name: "data3" },
];

//@disc  get single product
//@route GET /api/product/:id
export const getSingleProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = products.find((u) => u.id === productId);
  if (product) {
    res.status(200).json(product);
  } else {
    const error = new Error("Post " + productId + " not found");
    error.status = 404;
    return next(error);
  }
});

//@disc  get all product or with limit throug query param
//@route GET /api/product/
export const getAllProducts = asyncHandler(async (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(products.slice(0, limit));
  } else {
    res.status(200).json(products);
  }
});

//@disc  post new product
//@route POST /api/product/
export const postNewProduct = asyncHandler(async (req, res, next) => {
  const newProduct = { id: products.length + 1, name: req.body.name };
  if (newProduct.name) {
    products.push(newProduct);
    res.status(200).json(newProduct);
  } else {
    const error = new Error("name is required");
    error.status = 404;
    return next(error);
  }
});

//@disc  put new product
//@route PUT /api/product/
export const updateProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = products.find((u) => u.id === productId);
  if (product) {
    product.name = req.body.name;
    res.status(200).json(product);
  } else {
    const error = new Error("product not found");
    error.status = 404;
    return next(error);
  }
});

//@disc  delete product
//@route DELETE /api/product/
export const deleteProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = products.find((u) => u.id === productId);
  if (product) {
    products = products.filter((product) => product.id != productId);
    res.status(200).json(products);
  } else {
    const error = new Error("product not found");
    error.status = 404;
    return next(error);
  }
});
