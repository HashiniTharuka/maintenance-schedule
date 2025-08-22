import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  service_No: { type: String, maxlength: 6 },
  name: { type: String, maxlength: 50 },
  profile: { type: String, maxlength: 50 },
  email: { type: String },
  supervisor: { type: String, maxlength: 6 }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
