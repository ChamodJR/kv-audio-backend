import express from "express"
import { addProducts, getProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/",addProducts)
productRouter.get("/",getProducts)


export default productRouter;