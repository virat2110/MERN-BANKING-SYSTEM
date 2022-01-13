const mongoose = require("mongoose")
const adminSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
})
const User = mongoose.model("User",adminSchema);

module.exports = User;