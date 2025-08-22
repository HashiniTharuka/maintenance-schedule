import mongoose from "mongoose";

const tempTwMtcSchema = new mongoose.Schema({
  nodeName: { type: String, required: true, maxlength: 255 },
  endDate: { type: Date },
  completedOn: { type: Date },
  updatedOn: { type: Date },
  updatedBy: { type: String, maxlength: 6 },
  type: { type: String, maxlength: 255 },
  condition: { type: String, maxlength: 255 },
  towerSection: { type: String, maxlength: 255 },
  leg: { type: String, maxlength: 255 },
  observation: { type: String }
}, { timestamps: true });

export default mongoose.model("TempTwMTC", tempTwMtcSchema);
