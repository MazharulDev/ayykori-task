/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";

export type IProduct = {
  name: string;
  quantity: Number;
};
export type UserModel = Model<IProduct, Record<string, unknown>>;

// export type UserModel = Model<IUser, Record<string, unknown>>;
// export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;

export type IUserFilters = {
  searchTerm?: string;
  name?: string;
};
