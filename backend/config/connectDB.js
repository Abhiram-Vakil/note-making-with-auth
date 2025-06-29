import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async ()=>{
    try {
        const dbConnect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected Successfully`);
    } catch (error) {
        console.log("Error connecting to MongoDB :",error.message);
        process.exit(1);        
    }
}