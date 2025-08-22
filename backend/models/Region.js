import mongoose from "mongoose";

const regionSchema = new mongoose.Schema({
  id: { type: Number },
  province: { type: String, maxlength: 255 }
}, { timestamps: true });

export default mongoose.model("Region", regionSchema);
