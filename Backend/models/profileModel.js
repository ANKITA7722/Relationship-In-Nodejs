const mongoose = require("mongoose");
const profileScema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        unique:true
    },
    firstname:String,
    secondname:String
})



module.exports = mongoose.model("Profile", profileScema);