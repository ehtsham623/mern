import asyncHandler from "express-async-handler";
import User from "../models/usersModel.js";

//@disc  get user by id
//@route GET /api/users/:id
export const getUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findOne({ _id: userId });
  if (user) {
    res.status(200).json(user);
  } else {
    const error = new Error("User " + userId + " not found");
    error.status = 404;
    return next(error);
  }
});

//@disc  create new user
//@route POST /api/users/signup
export const signup = asyncHandler(async (req, res, next) => {
  if (req.body.name) {
    const newUser = await User.create({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
    });
    res.status(200).json(newUser);
  } else {
    const error = new Error("Name,category,price is required");
    error.status = 404;
    return next(error);
  }
});

//@disc  login user
//@route POST /api/users/login
export const login = asyncHandler(async (req, res, next) => {
  if (req.body.name) {
    const newUser = await User.create({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
    });
    res.status(200).json(newUser);
  } else {
    const error = new Error("Name,category,price is required");
    error.status = 404;
    return next(error);
  }
});
