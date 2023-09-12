import express from "express";
const app= express()
import {Connection} from "./Database/db.js";
import DeafaultProducts from "./default.js";
import cors from "cors"
app.use(cors())
// routing import 
import Router from "./Routes/route.js";

import dotenv from "dotenv"
dotenv.config()

import bodyParser from "body-parser";
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use("/", Router);

const PORT= process.env.PORT
app.listen(PORT, async(req,res)=>{
    try {
         await Connection
         console.log("connected to databse")
    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is awake at port ${PORT}`)
})
DeafaultProducts()

