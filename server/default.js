import productModel from "./Model/productModel.js";

import { products } from "./constants/product.js";

const DeafaultProducts= async()=>{
    try {
        // await productModel.deleteMany({})
        await productModel.insertMany(products)
        console.log("product added succesfully")
    } catch (error) {
        console.log(error.message)
    }
}

export default DeafaultProducts