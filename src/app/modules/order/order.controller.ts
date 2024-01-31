import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

import { OrderService } from "./order.service";
import { IOrder } from "./order.interface";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...orderData } = req.body;
  const result = await OrderService.createOrder(orderData);
  sendResponse<IOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order created successfully",
    data: result,
  });
});
const viewAllOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.viewAllOrder();
  sendResponse<IOrder[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders retrived successfully",
    data: result,
  });
});
const viewSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await OrderService.viewSingleOrder(id);
  sendResponse<IOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order retrived successfully",
    data: result,
  });
});

export const OrderController = {
  createOrder,
  viewAllOrder,
  viewSingleOrder,
};
