import mongoose from "mongoose";

const huaweiCardSchema = new mongoose.Schema({
  id: { type: Number },
  neName: { type: String, maxlength: 255 },
  lea: { type: String, maxlength: 255 },
  boardFullName: { type: String, maxlength: 255 },
  boardName: { type: String, maxlength: 255 },
  boardType: { type: String, maxlength: 255 },
  neId: { type: String, maxlength: 255 },
  ip: { type: String, maxlength: 255 },
  neType: { type: String, maxlength: 255 },
  subrackType: { type: String, maxlength: 255 },
  subrackId: { type: String, maxlength: 255 },
  slotId: { type: String, maxlength: 255 },
  hardwareVersion: { type: String, maxlength: 255 },
  softwareVersion: { type: String, maxlength: 255 },
  sn: { type: String, maxlength: 255 },
  boardAlias: { type: String, maxlength: 255 },
  boardStatus: { type: String, maxlength: 255 }
}, { timestamps: true });

export default mongoose.model("HuaweiCard", huaweiCardSchema);
