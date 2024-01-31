import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/create", OrderController.createOrder);
router.get("/view", OrderController.viewAllOrder);
router.get("/view/:id", OrderController.viewSingleOrder);
export const OrderRoutes = router;
