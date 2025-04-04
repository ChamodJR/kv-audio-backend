import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    comment : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true,
        default : Date.now
    },
    profilePicture : {
        type : String,
        required : true,
        default : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circsle-hd.png"
    },
    isApproved : {
        type : Boolean,
        required : true,
        default : false
    }
}) 

const Review = mongoose.model("Review",reviewSchema);

export default Review;
//