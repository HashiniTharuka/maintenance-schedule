import mongoose from "mongoose";

const schedule2024Schema = new mongoose.Schema({
  nodeName: { type: String, maxlength: 255 },
  lea: { type: String, maxlength: 255 },
  platform: { type: String, maxlength: 255 },
  type: { type: String, maxlength: 255 },
  task: { type: String, maxlength: 255 },
  priority: { type: String, maxlength: 255 },
  startDate: { type: Date },
  endDate: { type: Date },
  dateTime: { type: Date },
  status: { type: String, maxlength: 255 },
  statusDatetime: { type: String, maxlength: 255 },
  remark: { type: String, maxlength: 255 },
  remarkDatetime: { type: String, maxlength: 255 },
  stime: { type: String, maxlength: 255 },
  etime: { type: String, maxlength: 255 },
  updatedOn: { type: Date },
  vsDate: { type: Date },
  veDate: { type: Date },
  updatedBy: { type: Number }
}, { timestamps: true });

export default mongoose.model("Schedule2024", schedule2024Schema);
