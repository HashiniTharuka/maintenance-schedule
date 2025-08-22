import mongoose from "mongoose";

const vpnDistributionSchema = new mongoose.Schema({
  designation: { type: String },
  month: { type: String },
  count: { type: Number },
  cumulative_count: { type: Number }
}, { timestamps: true });

export default mongoose.model("VPNDistribution", vpnDistributionSchema);
