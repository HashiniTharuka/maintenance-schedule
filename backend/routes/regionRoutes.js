import express from "express";
import Region from "../models/Region.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const regions = await Region.find();
    res.json(regions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by ID
router.get("/:id", async (req, res) => {
  try {
    const region = await Region.findById(req.params.id);
    if (!region) return res.status(404).json({ message: "Region not found" });
    res.json(region);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const region = new Region(req.body);
    const saved = await region.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await Region.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Region not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Region.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Region not found" });
    res.json({ message: "Region deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
