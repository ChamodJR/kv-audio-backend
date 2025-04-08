import Product from "../models/product.js"
import { isItAdmin } from "./userController.js";

export async function addProducts(req, res) {
    if (req.user == null) {
      res.status(401).json({
        message: "Please login and try again",
      });
      return;
    }
  
    if (req.user.role !== "admin") {
      res.status(403).json({
        message: "You are not authorized to perform this action",
      });
      return;
    }
  
    const data = req.body;

    // Ensure isApproved and availability are set, defaulting to true if not provided
    
    if (data.availability === undefined) {
      data.availability = true;
    }
  
    try {
      // Check if product with the same key already exists
      const existingProduct = await Product.findOne({ key: data.key });
      if (existingProduct) {
        return res.status(409).json({
          message: "A product with the same key already exists",
        });
      }
  
      const newProduct = new Product(data);
      await newProduct.save();
  
      res.json({
        message: "Product registered successfully",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({
        error: "Product registration failed",
        details: error.message
      });
    }
  }
  
export async function getProducts(req, res) {
    let isAdmin = false;
    if (req.user != null && req.user.role === "admin") {
        isAdmin = true;
    }
    try {
      if (isAdmin) {
        // Admins can see all products
        const products = await Product.find();
        res.json(products);
        return;
      } else {
        // Users can only see approved AND available products  
        const products = await Product.find({ availability: true });
        res.json(products);
        return;
      }
    } catch (e) {
      console.error("Error fetching products:", e);
      res.status(500).json({
        message: "Failed to get products",
        details: e.message
      });
    }
}

export async function updateProducts(req,res){
  try{
    if(isItAdmin(req)){

      const key = req.params.key;

      const data = req.body;
    
      await Product.updateOne({key:key},data)

      res.json({
        message : "Product updated successfully"
      })
      return;

    }else{
      res.status(403).json({
        message : "You are not authorized to perform this action"
      })
      return;
    }

  }catch(e){
    res.status(500).json({
      message : "Failed to update products"
    })
  }
}

export async function deleteProduct(req,res) {
  try{
    if(isItAdmin(req)){
      const key = req.params.key;
      await Product.deleteOne({key:key})

      res.json({
        message : "Product deleted successfully"
      })
      return;

    }else{
      res.status(403).json({
        message : "You are not authorized to perform this action"
      })
      return;
    }
  }catch(e){
    res.status(500).json({
      message : "Failed to delete products"
    })
  }
}