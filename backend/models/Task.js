import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  platform: { type: String, maxlength: 255 },
  task: { type: String, maxlength: 255 },
  frequency: { type: Number }
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);
