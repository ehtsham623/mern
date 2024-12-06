import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const compareHashedPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
