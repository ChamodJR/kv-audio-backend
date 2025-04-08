import express from "express"
import { addProducts, getProducts, updateProducts, deleteProduct } from "../controllers/productController.js";

const productRouter = express.Router();

// Keep your original routes
productRouter.post("/", addProducts);
productRouter.get("/", getProducts);
productRouter.put("/:key", updateProducts); 
productRouter.delete("/:key", deleteProduct); 

export default productRouter;

