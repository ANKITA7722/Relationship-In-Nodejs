const express= require("express");
const app=express();
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const cors = require("cors")
const empRoute=require("./routes/employeeRoute");

require("dotenv").config();
app.use(cors());
mongoose.connect(process.env.DBCONNECTION).then(()=>{
console.log("DB connect Succesfunly")
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = process.env.PORT || 3000

app.use("/employee",empRoute);

app.listen(port, ()=>{
    console.log(`server run on ${port}!`)
})