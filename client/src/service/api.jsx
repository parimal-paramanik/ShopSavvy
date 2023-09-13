import axios from "axios"

const url= 'http://localhost:8080';

export const SignupUser=async(data)=>{
    try {
      return  await axios.post(`${url}/signup`,data)
    } catch (error) {
        console.log(`error while calling signup api` , error.message)
    }
}

export const LoginUser= async(data)=>{
  try {
    return  await axios.post(`${url}/login`,data)
  } catch (error) {
      console.log(`error while calling login api` , error)
      return error.response.data
  }
}