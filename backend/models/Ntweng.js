import mongoose from "mongoose";

const ntwengSchema = new mongoose.Schema({
  serviceNo: { type: String, maxlength: 6 },
  name: { type: String }
}, { timestamps: true });

export default mongoose.model("Ntweng", ntwengSchema);
