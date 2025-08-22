import mongoose from "mongoose";

const taskDetailsSchema = new mongoose.Schema({
  platform: { type: String, maxlength: 255 },
  maintenanceType: { type: String, maxlength: 255 },
  maintenanceItem: { type: String, maxlength: 255 },
  frequency: { type: String, maxlength: 255 }
}, { timestamps: true });

export default mongoose.model("TaskDetails", taskDetailsSchema);
