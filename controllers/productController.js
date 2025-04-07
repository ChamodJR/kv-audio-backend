import e from "express";
import Product from "../models/product.js"

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
      res.status(500).json({
        error: "Product registration failed",
      });
    }
  }
  


export async function getProducts(req,res){

    let isAdmin = false;
    if(req.user != null && req.user.role === "admin"){
        isAdmin = true;
    }

    try{
      
      if(isAdmin){
        // Admins can see all products
        const products = await Product.find();
        res.json(products);
       return;
      }else{
        // Users can only see approved products
        const products = await Product.find({isApproved : true});
        res.json(products);
        return;
      } 
      
    }catch(e){
      res.status(500).json({
        message : "Failed to get products"
      })
    }
}