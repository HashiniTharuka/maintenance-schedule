import express from "express";
import ScheduleOld from "../models/ScheduleOld.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const schedules = await ScheduleOld.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by ID
router.get("/:id", async (req, res) => {
  try {
    const schedule = await ScheduleOld.findById(req.params.id);
    if (!schedule) return res.status(404).json({ message: "Schedule not found" });
    res.json(schedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const schedule = new ScheduleOld(req.body);
    const saved = await schedule.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await ScheduleOld.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Schedule not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await ScheduleOld.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Schedule not found" });
    res.json({ message: "Schedule deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
