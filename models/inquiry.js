import mongoose from "mongoose";

const inquirySchema = new mongoose.schema({
    Id : {
        type : Number,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    message : {
        type : String,
        required : true,
        
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    date : {
        type : Data,
        required : true,
        unique : Date.now()
    },
    response : {
        type : String,
        required : false,
        default : ""
    },
    isResolved : {
        type : Boolean,
        required : true,
        unique : true
    },
})

const Product = mongoose.model("Inquiry", inquirySchema);