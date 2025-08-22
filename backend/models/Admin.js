import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  serviceNo: { type: String, maxlength: 6 },
  name: { type: String, maxlength: 50 },
  profile: { type: String, maxlength: 50 },
  email: { type: String },
  supervisor: { type: String, maxlength: 6 }
}, { timestamps: true });

export default mongoose.model("Admin", adminSchema);
