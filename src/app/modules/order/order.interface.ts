import { Model, Types } from "mongoose";

export type IOrder = {
  orderNumber: string;
  item: { type: Types.ObjectId; _id: Types.ObjectId };
};
export type OrderModel = Model<IOrder, Record<string, unknown>>;

export type IOrderFilters = {
  searchTerm?: string;
  name?: string;
};
