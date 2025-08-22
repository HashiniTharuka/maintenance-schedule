import mongoose from "mongoose";

const batterySchema = new mongoose.Schema({
  id: { type: Number }, // float in SQL → Number in JS
  batterySerialNo: { type: String, maxlength: 255 },
  supplier: { type: String, maxlength: 255 },
  manufact: { type: String, maxlength: 255 },
  model: { type: String, maxlength: 255 },
  orderN: { type: String, maxlength: 255 },
  tenderNo: { type: String, maxlength: 255 },
  region: { type: String, maxlength: 255 },
  province: { type: String, maxlength: 255 },
  opmc: { type: String, maxlength: 255 },
  rtom: { type: String, maxlength: 255 },
  siteName: { type: String, maxlength: 255 },
  elementCode: { type: String, maxlength: 255 },
  lea: { type: String, maxlength: 255 },
  phase: { type: String, maxlength: 255 },
  platform: { type: String, maxlength: 255 },
  deviceType: { type: String, maxlength: 255 },
  cabinet: { type: String, maxlength: 255 },
  dateLfpBatteriesAllocated: { type: String, maxlength: 255 },
  warrentyStartDate: { type: String, maxlength: 255 },
  warrentyExpiryDate: { type: String, maxlength: 255 },
  remainingWarrentyPeriod: { type: String, maxlength: 255 },
  capacity: { type: String, maxlength: 255 },
  batteriesAllocated: { type: Number },
  dateLfpBatteriesInstalled: { type: String, maxlength: 255 },
  svcProvider: { type: String, maxlength: 255 },
  addedDate: { type: String, maxlength: 255 }
}, { timestamps: true });

export default mongoose.model("Battery", batterySchema);
