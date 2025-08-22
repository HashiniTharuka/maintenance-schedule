import mongoose from "mongoose";

const towerSchema = new mongoose.Schema({
  towerLocation: { type: String, maxlength: 255 },
  code: { type: String, maxlength: 255 },
  networkEngineer: { type: String, maxlength: 255 },
  serviceNo: { type: Number },
  towerHeight: { type: Number },
  type: { type: String, maxlength: 255 }
}, { timestamps: true });

export default mongoose.model("Tower", towerSchema);
