import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const Connection= mongoose.connect(process.env.MONGO_URL)

export default Connection