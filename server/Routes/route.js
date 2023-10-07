import express from "express"
const Router= express.Router()
import { Signup ,Login} from "../Controller/usercontroller.js"
import { getProducts,getProductById } from "../Controller/product_controller.js"
// defining all the routes
Router.post("/signup",Signup)
Router.post("/login",Login)
Router.get("/products", getProducts)
Router.get("/product/:id", getProductById)

export default Router
