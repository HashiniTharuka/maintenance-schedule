import mongoose from "mongoose";

const cardDetailsSchema = new mongoose.Schema({
  location: { type: String, maxlength: 255 },
  name: { type: String, maxlength: 255 },
  ip: { type: String, maxlength: 255 },
  type: { type: String, maxlength: 255 },
  serviceType: { type: String, maxlength: 255 }, // removed space in field name
  cardName: { type: String, maxlength: 255 },
  version: { type: String, maxlength: 255 },
  number: { type: Number } // float in SQL → Number in JS
}, { timestamps: true });

export default mongoose.model("CardDetails", cardDetailsSchema);
