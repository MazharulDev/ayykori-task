import express from "express";
import { UserController } from "./product.controller";

const router = express.Router();

router.post("/save", UserController.saveProduct);
export const ProductRoutes = router;
