import mongoose from "mongoose";

const messurementsSchema = new mongoose.Schema({
  taskId: { type: Number },
  messurement: { type: String, maxlength: 50 },
  unit: { type: String, maxlength: 20 }
}, { timestamps: true });

export default mongoose.model("Messurements", messurementsSchema);
