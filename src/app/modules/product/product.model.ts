import { Schema, model } from "mongoose";
import { IProduct, ProductModel } from "./product.interface";

export const ProductSchema = new Schema<IProduct, ProductModel>(
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

export const Product = model<IProduct, ProductModel>("Product", ProductSchema);
