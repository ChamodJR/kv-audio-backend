import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
    id : {
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
        type : Date,
        required : true,
        default : Date.now()
    },
    response : {
        type : String,
        required : false,
        default : ""
    },
    isResolved : {
        type : Boolean,
        required : true,
        required : false
    },
})

const Inquiry = mongoose.model("Inquiry", inquirySchema);

export default Inquiry; 