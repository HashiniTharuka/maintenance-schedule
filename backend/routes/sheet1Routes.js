import express from "express";
import Sheet1 from "../models/Sheet1.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const sheets = await Sheet1.find();
    res.json(sheets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by ID
router.get("/:id", async (req, res) => {
  try {
    const sheet = await Sheet1.findById(req.params.id);
    if (!sheet) return res.status(404).json({ message: "Sheet not found" });
    res.json(sheet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const sheet = new Sheet1(req.body);
    const saved = await sheet.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await Sheet1.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Sheet not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Sheet1.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Sheet not found" });
    res.json({ message: "Sheet deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
