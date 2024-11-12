const mongoose = require("mongoose");
const profileScema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        unique:true
    },
    firstname:String,
    secoundname:String
})



module.exports = mongoose.model();