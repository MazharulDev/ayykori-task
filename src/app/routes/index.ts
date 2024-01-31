import express from "express";
import { ProductRoutes } from "../modules/product/product.route";
import { OrderRoutes } from "../modules/order/order.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/product",
    route: ProductRoutes,
  },
  {
    path: "/order",
    route: OrderRoutes,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
