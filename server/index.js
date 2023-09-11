import express from "express";
const app= express()
import {Connection} from "./Database/db.js";
import DeafaultProducts from "./default.js";
import dotenv from "dotenv"
import cors from "cors"
app.use(cors())
dotenv.config()
// app.get("/",(req,res)=>{
//     res.send("everything is fine")
// })

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

