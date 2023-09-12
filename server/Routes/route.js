import express from "express"
const Router= express.Router()
import { Signup } from "../Controller/usercontroller.js"

Router.post("/signup",Signup)

export default Router