import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

//routes
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import foodRoutes from "./routes/food.routes.js";
import countryRoutes from "./routes/country.routes.js";

import { FRONTEND_URL } from "./config.js";

const app = express();

//cors configuration for the frontend to access the backend server
app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true,
    })
);
// morgan is used to log the request details in the console for debugging purposes
app.use(morgan("dev"));
app.use(express.json());
//cookie parser is used to parse the cookies that are sent in the request headers from the client side to the server side
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", foodRoutes);
app.use("/api", countryRoutes);

export default app;
