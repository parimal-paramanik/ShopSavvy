
import express from "express";
import bcrypt from "bcrypt"
import userModel from "../Model/userModel.js"

// signup of a user 
export const Signup = async (request, response) => {
    try {
        const { firstname, lastname, username, email, password } = request.body;
        if (!firstname || !lastname || !username || !email || !password) {
            // console.log("all field required")
            return response.status(400).send({ msg: "All feilds are required" });
        }
        const exist = await userModel.findOne({ username: username });
        if (exist) {
            // console.log("user already exists")
            return response.send({ message: 'User already exist' });
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