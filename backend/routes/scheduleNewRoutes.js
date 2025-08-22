import express from "express";
import ScheduleNew from "../models/ScheduleNew.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const schedules = await ScheduleNew.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by ID
router.get("/:id", async (req, res) => {
  try {
    const schedule = await ScheduleNew.findById(req.params.id);
    if (!schedule) return res.status(404).json({ message: "Schedule not found" });
    res.json(schedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const schedule = new ScheduleNew(req.body);
    const saved = await schedule.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await ScheduleNew.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Schedule not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await ScheduleNew.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Schedule not found" });
    res.json({ message: "Schedule deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
