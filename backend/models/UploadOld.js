import mongoose from "mongoose";

const uploadOldSchema = new mongoose.Schema({
  id: { type: Number },
  node_Name: { type: String, maxlength: 255 },
  start_Date: { type: Date },
  end_Date: { type: Date },
  platform: { type: String, maxlength: 255 },
  status: { type: String, maxlength: 255 },
  status_datetime: { type: String, maxlength: 255 },
  updated_on: { type: Date },
  updated_by: { type: Number }  // float equivalent
}, { timestamps: true });

export default mongoose.model("UploadOld", uploadOldSchema);
