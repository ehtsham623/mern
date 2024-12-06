import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/usersModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedTokenData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedTokenData.id;
      next();
    } catch (err) {
      const error = new Error("Not authorized");
      error.status = 401;
      return next(error);
    }
  }
  if (!token) {
    const error = new Error("Not authorized,No token");
    error.status = 401;
    return next(error);
  }
});

export default protect;
