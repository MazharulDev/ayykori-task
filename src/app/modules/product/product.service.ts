import { IProduct } from "./product.interface";
import { User } from "./product.model";

const createUser = async (payload: IProduct): Promise<IProduct> => {
  const result = await User.create(payload);
  return result;
};

export const ProductService = {
  createUser,
};
