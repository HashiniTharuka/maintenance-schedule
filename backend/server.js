import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes.js";
import adScheduleRoutes from "./routes/adScheduleRoutes.js";
import adUploadRoutes from "./routes/adUploadRoutes.js";
import batteryRoutes from "./routes/batteryRoutes.js";
import cardDetailsRoutes from "./routes/cardDetailsRoutes.js";
import formDataRoutes from "./routes/formDataRoutes.js";
import formDataNewRoutes from "./routes/formDataNewRoutes.js";
import formDataTMRoutes from "./routes/formDataTMRoutes.js";
import formDateMarch2025Routes from "./routes/formDateMarch2025Routes.js";
import huaweiCardRoutes from "./routes/huaweiCardRoutes.js";
import latestAllEditedRoutes from "./routes/latestAllEditedRoutes.js";
import lea2Routes from "./routes/lea2Routes.js";
import manjulaRoutes from "./routes/manjulaRoutes.js";
import manoraRoutes from "./routes/manoraRoutes.js";
import messurementsRoutes from "./routes/messurementsRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/admins", adminRoutes);
app.use("/api/ad-schedules", adScheduleRoutes);
app.use("/api/adUploads", adUploadRoutes);
app.use("/api/batteries", batteryRoutes);
app.use("/api/carddetails", cardDetailsRoutes);
app.use("/api/formdata", formDataRoutes);
app.use("/api/formdata-new", formDataNewRoutes);
app.use("/api/formdata-tm", formDataTMRoutes);
app.use("/api/form-date-march2025", formDateMarch2025Routes);
app.use("/api/huaweicards", huaweiCardRoutes);
app.use("/api/latest-all-edited", latestAllEditedRoutes);
app.use("/api/lea2", lea2Routes);
app.use("/api/manjula", manjulaRoutes);
app.use("/api/manora", manoraRoutes);
app.use("/api/messurements", messurementsRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully"); // ← Add this
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.log("❌ MongoDB connection error:", err));
