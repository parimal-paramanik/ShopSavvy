import express from "express"
const Router= express.Router()
import { Signup ,Login} from "../Controller/usercontroller.js"
import { getProducts } from "../Controller/product_controller.js"
// defining all the routes
Router.post("/signup",Signup)
Router.post("/login",Login)
Router.get("/products", getProducts)

export default Router
