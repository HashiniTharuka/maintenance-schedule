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
import msanDistributionRoutes from "./routes/msanDistributionRoutes.js";
import nodeRoutes from "./routes/nodeRoutes.js";
import ntwengRoutes from "./routes/ntwengRoutes.js";
import platformRoutes from "./routes/platformRoutes.js";
import platformUserRoutes from "./routes/platformUserRoutes.js";
import regionRoutes from "./routes/regionRoutes.js";
import scheduleRoutes from "./routes/scheduleRoutes.js";
import scheduleNewRoutes from "./routes/scheduleNewRoutes.js";
import scheduleOldRoutes from "./routes/scheduleOldRoutes.js";
import schedule2024Routes from "./routes/schedule2024Routes.js";
import schedule20242025Routes from "./routes/schedule20242025Routes.js";
import schedulebackupRoutes from "./routes/schedulebackupRoutes.js";
import sheet1Routes from "./routes/sheet1Routes.js";
import slbnDistributionRoutes from "./routes/slbnDistributionRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import taskDetailsRoutes from "./routes/taskDetailsRoutes.js";
import taskDetailsOldRoutes from "./routes/taskDetailsOldRoutes.js";
import tempTwMtcRoutes from "./routes/tempTwMtcRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import towerRoutes from "./routes/towerRoutes.js";
import towerDetailsRoutes from "./routes/towerDetailsRoutes.js";
import towerDistributionRoutes from "./routes/towerDistributionRoutes.js";
import towerDistribution2Routes from "./routes/towerDistribution2Routes.js";
import towerDistributionOldRoutes from "./routes/towerDistributionOldRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import uploadOldRoutes from "./routes/uploadOldRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import vpnDistributionRoutes from "./routes/vpnDistributionRoutes.js";
import zteCArdsRoutes from "./routes/zteCArdsRoutes.js";



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
app.use("/api/msan-distribution", msanDistributionRoutes);
app.use("/api/nodes", nodeRoutes);
app.use("/api/ntweng", ntwengRoutes);
app.use("/api/platforms", platformRoutes);
app.use("/api/platform-users", platformUserRoutes);
app.use("/api/regions", regionRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/schedules-new", scheduleNewRoutes);
app.use("/api/schedules-old", scheduleOldRoutes);
app.use("/api/schedules-2024", schedule2024Routes);
app.use("/api/schedules-2024-2025", schedule20242025Routes);
app.use("/api/schedules-backup", schedulebackupRoutes);
app.use("/api/sheet1", sheet1Routes);
app.use("/api/slbn-distribution", slbnDistributionRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/task-details", taskDetailsRoutes);
app.use("/api/task-details-old", taskDetailsOldRoutes);
app.use("/api/temp-tw-mtc", tempTwMtcRoutes);
app.use("/api/test", testRoutes);
app.use("/api/towers", towerRoutes);
app.use("/api/tower-details", towerDetailsRoutes);
app.use("/api/tower-distribution", towerDistributionRoutes);
app.use("/api/tower-distribution2", towerDistribution2Routes);
app.use("/api/tower-distribution-old", towerDistributionOldRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/uploads-old", uploadOldRoutes);
app.use("/api/users", userRoutes);
app.use("/api/vpn-distribution", vpnDistributionRoutes);
app.use("/api/zte-cards", zteCArdsRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully"); // ← Add this
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.log("❌ MongoDB connection error:", err));
