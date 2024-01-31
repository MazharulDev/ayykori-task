/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export type IProduct = {
  name: string;
  quantity: Number;
};
export type ProductModel = Model<IProduct, Record<string, unknown>>;

export type IProductFilters = {
  searchTerm?: string;
  name?: string;
};
