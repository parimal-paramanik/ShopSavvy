import express from "express"
const Router= express.Router()
import { Signup ,Login} from "../Controller/usercontroller.js"

Router.post("/signup",Signup)
Router.post("/login",Login)

export default Router