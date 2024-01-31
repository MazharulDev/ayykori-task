import mongoose, { Schema, model } from "mongoose";
import { IOrder, OrderModel } from "./order.interface";

export const OrderSchema = new Schema<IOrder, OrderModel>(
  {
    orderNumber: {
      type: String,
      required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Order = model<IOrder, OrderModel>("Order", OrderSchema);
