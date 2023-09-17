
import productModel from "../Model/productModel.js"

 export const getProducts = async(request,response)=>{  
    try {
        const products=  await productModel.find({})
        response.status(200).json(products)
    } catch (error) {
          response.status(500).jsno({message:error.message})
    } 
}

