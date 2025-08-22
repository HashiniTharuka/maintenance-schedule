import mongoose from "mongoose";

const lea2Schema = new mongoose.Schema({
  id: { type: Number },
  zone: { type: String, maxlength: 255 },
  region: { type: String, maxlength: 255 },
  province: { type: String, maxlength: 255 },
  rtom: { type: String, maxlength: 255 },
  rtom1: { type: String, maxlength: 255 },
  lea: { type: String, maxlength: 255 },
  leaName: { type: String, maxlength: 255 },
  designation: { type: String, maxlength: 255 },
  ntwEng: { type: String, maxlength: 255 },
  serviceNo: { type: Number },
  owner2: { type: Number },
  owner2Name: { type: String, maxlength: 255 },
  owner3: { type: String, maxlength: 225 },
  owner3Name: { type: String, maxlength: 225 }
}, { timestamps: true });

export default mongoose.model("LEA2", lea2Schema);
