import { Schema, model, models } from "mongoose";

interface User {
  email: string;
  password: string;
  fullname: string;
  roles: string[];
}

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    fullname: {
      type: String,
      required: [true, "Fullname is required"],
      minLength: [3, "Fullname must be at least 3 characters"],
      maxLength: [20, "Fullname must be at most 20 characters"],
    },
    roles: {
      type: [String],
      default: ["customer"], // Asignar "customer" por defecto
      enum: ["customer", "master"], // Limitar los valores posibles a "customer" y "master"
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model<User>("User", UserSchema);
export default User;
