import mongoose from "mongoose";
import ENV from "./env.js";

const connectDB = async()=>{
    try{
        await mongoose.connect(ENV.MONGO_URL)
        console.log("Mongo DB connect ho gaya hai finally.")
    }
    catch(err){
        console.log(err)
        console.log("Connection fail ho gaya.")
        process.exit(1);

    }
}
connectDB();

export default connectDB;