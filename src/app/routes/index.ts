import express from "express";
import { ProductRoutes } from "../modules/product/product.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/product",
    route: ProductRoutes,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
