import mongoose from "mongoose";

const platformUserSchema = new mongoose.Schema({
  platform: { type: String, maxlength: 20 },
  serviceNo: { type: String, maxlength: 6 },
  name: { type: String, maxlength: 50 }
}, { timestamps: true });

export default mongoose.model("PlatformUser", platformUserSchema);
