import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/save", ProductController.saveProduct);
export const ProductRoutes = router;
