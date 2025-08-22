import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
  nodeName: { type: String, required: true, maxlength: 255 },
  platform: { type: String, maxlength: 10 },
  maintenanceTask: { type: String, maxlength: 255 },
  status: { type: String, maxlength: 255 },
  remark: { type: String },
  endDate: { type: Date },
  completedOn: { type: Date },
  updatedOn: { type: Date },
  updatedBy: { type: String, maxlength: 6 }
}, { timestamps: true });

export default mongoose.model("FormData", formDataSchema);
