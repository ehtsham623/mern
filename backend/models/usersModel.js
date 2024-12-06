import mongoose from "mongoose";
import { generateToken } from "../configs/utils.js";
const userScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password required"],
      trim: true,
    },
  },
  { timestamps: true },
);

// default method to remove some values
// method called by default when we get user object
userScheme.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

//custom method to remove some fields
userScheme.methods.toJSONWithoutPass = function () {
  const user = this.toObject();
  delete user.password;
  user.accessToken = generateToken(this._id);
  return user;
};

export default mongoose.model("User", userScheme);
