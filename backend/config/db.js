import mongoose from "mongoose";
export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://Rajdb:RajSin1218@cluster0.z2o3d.mongodb.net/cafe-cookie').then(()=>console.log("DB connected"));
}