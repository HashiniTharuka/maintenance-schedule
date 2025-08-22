import mongoose from "mongoose";

const aDScheduleSchema = new mongoose.Schema({
  id: { type: Number }, // float in SQL → Number in JS
  alarmDrill: { type: String, maxlength: 255 },
  designation: { type: String, maxlength: 255 },
  startDate: { type: Date },
  endDate: { type: Date },
  scheduledDate: { type: Date },
  updateStart: { type: Date },
  updateEnd: { type: Date },
  status: { type: String, maxlength: 255 },
  statusDate: { type: String, maxlength: 255 } // keeping as string, can convert to Date if needed
}, { timestamps: true });

export default mongoose.model("ADSchedule", aDScheduleSchema);
