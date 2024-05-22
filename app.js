import express from "express";
import dotenv from "dotenv";
import hpp from "hpp";
import cors from "cors";
import helmet from "helmet";
import rateLimiter from "express-rate-limit";
import router from "./res/routes/WebAPI.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(hpp());

app.use(express.json());

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use(limiter);

mongoose
  .connect(process.env.MONGODB)
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
