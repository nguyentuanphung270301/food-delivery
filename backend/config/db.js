import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://blackphoenix2703:27032001@cluster0.4u7pk.mongodb.net/food-del').then(() => { console.log("DB Connected") })
}