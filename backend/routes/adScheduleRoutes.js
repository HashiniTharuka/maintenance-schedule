import express from "express";
import ADSchedule from "../models/ADSchedule.js";

const router = express.Router();

// Get all schedules
router.get("/", async (req, res) => {
  try {
    const schedules = await ADSchedule.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single schedule by ID
router.get("/:id", async (req, res) => {
  try {
    const schedule = await ADSchedule.findById(req.params.id);
    if (!schedule) return res.status(404).json({ message: "Schedule not found" });
    res.json(schedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new schedule
router.post("/", async (req, res) => {
  try {
    const schedule = new ADSchedule(req.body);
    const saved = await schedule.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update schedule
router.put("/:id", async (req, res) => {
  try {
    const updated = await ADSchedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Schedule not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete schedule
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await ADSchedule.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Schedule not found" });
    res.json({ message: "Schedule deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
