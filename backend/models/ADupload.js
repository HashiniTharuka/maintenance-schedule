import mongoose from "mongoose";

const aDUploadSchema = new mongoose.Schema({
  alarmDrill: { type: String },
  region: { type: String },
  fileLocation: { type: String },
  date: { type: Date },
  ntweng: { type: String },
  serviceNo: { type: String, maxlength: 6 }
}, { timestamps: true });

export default mongoose.model("ADupload", aDUploadSchema);
