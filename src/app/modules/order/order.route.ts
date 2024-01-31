import express from "express";
import { OrderController } from "./order.controller";
import limiter from "../../middlewares/rateLimiter";

const router = express.Router();

router.post("/create", limiter, OrderController.createOrder);
router.get("/view", OrderController.viewAllOrder);
router.get("/view/:id", OrderController.viewSingleOrder);
export const OrderRoutes = router;
