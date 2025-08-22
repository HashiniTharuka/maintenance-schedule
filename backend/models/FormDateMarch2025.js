import mongoose from "mongoose";

const formDateMarch2025Schema = new mongoose.Schema({
  nodeName: { type: String, required: true, maxlength: 255 },
  platform: { type: String, maxlength: 10 },
  maintenanceTask: { type: String, maxlength: 255 },
  status: { type: String, maxlength: 255 },
  remark: { type: String }, // varchar(max) → String
  endDate: { type: Date }, // smalldatetime → Date
  completedOn: { type: Date },
  updatedOn: { type: Date },
  updatedBy: { type: String, maxlength: 6 }
}, { timestamps: true });

export default mongoose.model("FormDateMarch2025", formDateMarch2025Schema);
