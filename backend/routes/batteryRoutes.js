import express from "express";
import Battery from "../models/Battery.js";

const router = express.Router();

// Get all batteries
router.get("/", async (req, res) => {
  try {
    const batteries = await Battery.find();
    res.json(batteries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single battery by ID
router.get("/:id", async (req, res) => {
  try {
    const battery = await Battery.findById(req.params.id);
    if (!battery) return res.status(404).json({ message: "Battery not found" });
    res.json(battery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new battery
router.post("/", async (req, res) => {
  try {
    const battery = new Battery(req.body);
    const saved = await battery.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update battery
router.put("/:id", async (req, res) => {
  try {
    const updated = await Battery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Battery not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete battery
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Battery.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Battery not found" });
    res.json({ message: "Battery deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
