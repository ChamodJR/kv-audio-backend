import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        default : "customer"
    },
    address : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        unique : true
    },
    profilePicture : {
        type : String,
        required : true,
        default : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
    }
});

const User = mongoose.model("User",userSchema);

export default User;

//admin= chamod1@example.com password=123
// admin= chamod2@example.com password=123
// customer= chamod3@example.com password=123