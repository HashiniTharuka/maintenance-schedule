import mongoose from "mongoose";

const slbnDistributionSchema = new mongoose.Schema({
  designation: { type: String, maxlength: 255 },
  month: { type: String, maxlength: 255 },
  count: { type: Number },
  cumulativeCount: { type: Number }
}, { timestamps: true });

export default mongoose.model("SLBNdistribution", slbnDistributionSchema);
