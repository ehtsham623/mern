import asyncHandler from "express-async-handler";
import User from "../models/usersModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
  const { name, email, password } = req.body;
  if (name && email && password) {
    const userExist = await User.findOne({ email });
    if (userExist) {
      const error = new Error("User already exists");
      error.status = 400;
      return next(error);
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
      });
      const userObject = newUser.toObject();
      userObject.accessToken = generateToken(newUser._id);
      res.status(200).json(userObject);
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
    if (userExist && (await bcrypt.compare(password, userExist.password))) {
      res.status(200).json(userExist.toJSONWithoutPass());
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

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
