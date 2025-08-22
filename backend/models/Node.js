import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema({
  nId: { type: Number },
  nodeName: { type: String, maxlength: 255 },
  lea: { type: String, maxlength: 255 },
  platform: { type: String, maxlength: 255 },
  type: { type: String, maxlength: 255 }
}, { timestamps: true });

export default mongoose.model("Node", nodeSchema);
