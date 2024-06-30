import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        ingredients: {
            type: String,
            required: true,
        },
        preparation: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        imglink: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            /* ref: "Country", */
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Food", foodSchema);
