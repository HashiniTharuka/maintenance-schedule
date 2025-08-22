import express from "express";
import FormDateMarch2025 from "../models/FormDateMarch2025.js";

const router = express.Router();

// Get all records
router.get("/", async (req, res) => {
  try {
    const forms = await FormDateMarch2025.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by ID
router.get("/:id", async (req, res) => {
  try {
    const form = await FormDateMarch2025.findById(req.params.id);
    if (!form) return res.status(404).json({ message: "Record not found" });
    res.json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new record
router.post("/", async (req, res) => {
  try {
    const form = new FormDateMarch2025(req.body);
    const saved = await form.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update record
router.put("/:id", async (req, res) => {
  try {
    const updated = await FormDateMarch2025.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Record not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete record
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await FormDateMarch2025.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Record not found" });
    res.json({ message: "Record deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
