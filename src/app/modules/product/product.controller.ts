import { Request, Response } from "express";
import { ProductService } from "./product.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IProduct } from "./product.interface";

const saveProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  const result = await ProductService.createUser(userData);
  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product added successfully",
    data: result,
  });
});

export const ProductController = {
  saveProduct,
};
