import asyncHandler from "express-async-handler";
import User from "../models/usersModel.js";
import {
  generateToken,
  hashPassword,
  compareHashedPassword,
} from "../configs/utils.js";

//@disc  get user by id
//@route GET /api/users/:id
export const getLoggedInUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ _id: req.userId });
  res.status(200).json({
    data: user,
    message: "User login successfully",
  });
});

//@disc  create new user
//@route POST /api/users/signup
export const signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    const userExist = await User.findOne({ email });
    if (userExist) {
      const error = new Error("User already exists");
      error.status = 400;
      return next(error);
    } else {
      const newUser = await User.create({
        name: name,
        email: email,
        password: await hashPassword(password),
      });
      const userObject = newUser.toObject();
      // userObject.accessToken = generateToken(newUser._id);
      res
        .status(200)
        .json({ data: userObject, message: "User created successfully" });
    }
  } else {
    const error = new Error("name, email, password is required");
    error.status = 404;
    return next(error);
  }
});

//@disc  login user
//@route POST /api/users/login
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    const userExist = await User.findOne({ email });
    if (userExist && compareHashedPassword(password, userExist.password)) {
      res.status(200).json({
        data: userExist.toJSONWithoutPass(),
        message: "User login successfully",
      }); //using custom to json method
    } else {
      const error = new Error("User does not exist");
      error.status = 404;
      return next(error);
    }
  } else {
    const error = new Error("Email, password is required");
    error.status = 404;
    return next(error);
  }
});
