import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes.js";
import adScheduleRoutes from "./routes/adScheduleRoutes.js";
import adUploadRoutes from "./routes/adUploadRoutes.js";
import batteryRoutes from "./routes/batteryRoutes.js";


dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/admins", adminRoutes);
app.use("/api/ad-schedules", adScheduleRoutes);
app.use("/api/adUploads", adUploadRoutes);
app.use("/api/batteries", batteryRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully"); // ← Add this
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.log("❌ MongoDB connection error:", err));
