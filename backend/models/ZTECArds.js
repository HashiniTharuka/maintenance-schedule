import mongoose from "mongoose";

const zteCArdsSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  lea: { type: String },
  ip: { type: String },
  type: { type: String },
  service_type: { type: String },
  card_name: { type: String },
  version: { type: String },
  number: { type: Number }
}, { timestamps: true });

export default mongoose.model("ZTECArds", zteCArdsSchema);
