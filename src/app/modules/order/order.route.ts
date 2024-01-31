import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/create", OrderController.createOrder);
export const OrderRoutes = router;
