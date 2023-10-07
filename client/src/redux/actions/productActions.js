// this file will call and  define the api though redux
 import axios from "axios"
 import * as actionTypes from "../constants/productConstant"
 const url= 'http://localhost:8080'
 
export const getProducts= () =>async(dispatch)=>{
    try{ 
    let {data} = await axios.get(`${url}/products`)
    // console.log(data)
    dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload: data})

    }catch(error){
    //    console.log(`error while calling api getproduct`, error.message)
    dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
    }
}


export const getSingleProductDeatils = (id)=>async(dispatch)=>{
      
    try{
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})
        let {data} = await axios.get(`${url}/product/${id}`)
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,payload: data})
    }catch(error){
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:error.message})
    }

}