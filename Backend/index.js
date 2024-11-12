const express= require("express");
const app=express();
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const cors = require("cors")


require("dotenv").config();
app.use(cors());
mongoose.connect(process.env.DBCONNECTION).then(()=>{
console.log("DB connect Succesfunly")
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const port = process.env.PORT || 3000



app.listen(port, ()=>{
    console.log(`server run on 8080 port !`)
})