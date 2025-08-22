import mongoose from "mongoose";

const towerDistributionOldSchema = new mongoose.Schema({
  designation: { type: String, maxlength: 255 },
  month: { type: String, maxlength: 255 },
  count: { type: Number }
}, { timestamps: true });

export default mongoose.model("TowerDistributionOld", towerDistributionOldSchema);
