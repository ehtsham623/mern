import mongoose from "mongoose";

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

export default mongoose.model("User", userScheme);
