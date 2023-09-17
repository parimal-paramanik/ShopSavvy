
import express from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../Model/userModel.js"

// signup of a user 
export const Signup = async (request, response) => {
    try {
        const { firstname, lastname, username, email, password } = request.body;
        if (!firstname || !lastname || !username || !email || !password) {
            // console.log("all field required")
            return response.status(400).send({ msg: "All feilds are required" });
        }
        const exist = await userModel.findOne({ username: username});
        if (exist) {
            // console.log("user already exists")
            return response.send({ msg: 'User already exist' });
        }
        const hashedpassword = bcrypt.hashSync(password, 5)
        const user = request.body;
        const newUser = new userModel({ ...user, password: hashedpassword });
        await newUser.save();
        response.status(200).send({ msg: "Registration successful", user: newUser });
        // console.log(newUser)
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
export const Login=async(request, response)=>{
     try {
        const {username,  password } = request.body;
        const user= await userModel.findOne({username})
        if(!user) return response.status(400).send({ message: 'login first' });
        const comparepassword= bcrypt.compareSync(password,user.password )
        if(!comparepassword) return response.send({ msg: "Wrong credentials"});
        const accessToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
            // { expiresIn: "24hr" }
          );
          response.status(200).send({ msg: "Login success", accessToken, username: user.username});
          console.log("login success")
     } catch (error) {
        response.status(500).send({ msg: error.message });
     }
     // routes
    
}