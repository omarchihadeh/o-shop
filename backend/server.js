/* const express = require('express') */
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
/* app.get('/', (req, res) => {
    res.send({
        message: "Ecommerce Server Running"
    })
}) */
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Omar's Ecommerce App Server</h1>");
});

//PORT
/* const PORT = 8080 */
const PORT = process.env.PORT || 8080;

//run listen
/* app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
}) */
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on http://localhost:${PORT}`
  );
});
