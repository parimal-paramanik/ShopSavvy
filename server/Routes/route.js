import express from "express"
const Router= express.Router()
import { Signup ,Login} from "../Controller/usercontroller.js"
// defining all the routes
Router.post("/signup",Signup)
Router.post("/login",Login)

export default Router
