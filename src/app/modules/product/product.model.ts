import { Schema, model } from "mongoose";
import { IProduct, UserModel } from "./product.interface";

export const ProductSchema = new Schema<IProduct, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IProduct, UserModel>("Product", ProductSchema);
