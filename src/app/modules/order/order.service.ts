import mongoose from "mongoose";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const result = await Order.create(payload);
    return result;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

const viewAllOrder = async (): Promise<IOrder[]> => {
  const result = await Order.find({});
  return result;
};
const viewSingleOrder = async (id: string): Promise<IOrder | null> => {
  const result = await Order.findById(id).populate("item");
  return result;
};

export const OrderService = {
  createOrder,
  viewAllOrder,
  viewSingleOrder,
};
