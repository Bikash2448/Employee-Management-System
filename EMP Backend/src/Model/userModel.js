import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,      
    },
    role:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
        minLength:10,
        maxLength:10
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

export const userModel = mongoose.model('empUser', userSchema);