import mongoose from "mongoose";

const platformSchema = new mongoose.Schema({
  platform: { type: String, maxlength: 255 },
  task: { type: String, maxlength: 255 }
}, { timestamps: true });

export default mongoose.model("Platform", platformSchema);
