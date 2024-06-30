import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL || "mongodb://localhost/merndb"
        );
        console.log("Database is connected successfully!");
    } catch (error) {
        console.log(error);
    }
};
